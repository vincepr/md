# Writing EntityFramework Linq-Queries
## The Data for the following examples
```csharp
private class OurDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder
            .UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=FootballLeage_EFCore")
            // Enable explicit loging if executed sql-queries
            .LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name}, LogLevel.Information)
            // Disable automatic redacting
            .EnableSensitiveDataLogging();
    }

    public DbSet<Teams> Teams { get; set; }
    public DbSet<League> Leagues { get; set; }
}

public class Team {
    public int Id { get; set; }
    public string Name { get; set; }
    public int LeagueId { get; set; }
    public virtual League League { get; set; }
}

public class League {
    public int Id { get; set; }
    public string Name { get; set; }
}
```

## Adding Data

```csharp
OurDbContext ctx = new OurDbContext();

// synchronous:
var euro = new League { Name = "Europameisterschaft" };
ctx.Leagues.Add(euro);
// async
await ctx.Leagues.AddAsync(new League { Name = "Bundesliega" });

// up to now changes just happened in memory. Persist them:
ctx.SaveChanges();

AddTeamsToLeague();
await ctx.SaveChangesAsync(ctx, euro);

static async Task AddTeamsToLeague(OurDbContext ctx, League league) {
    var teams = new List<Team>
    {
        new Team {
            Name = "Redbull Leipzig",
            // using the "reference by id" to the league
            LeagueId = league.Id,
        },
        new Team {
            Name = "Fc Bayern",
            LeagueId = league.Id,
        },
        new Team {
            Name = "VfL Wolfsburg",
            // using the actual object of the league
            League = league,
        }
    };
    await ctx.AddRangeAsync(teams);
}
```
- EFCore will translate between using the actual League object vs the LeagueId and resolve those to the same sql-queries under the hood.

In the following example we only explicitly add the team. The new league gets added implicit.
- the sql-querys executed will be league first then the team (as neccesary for sql-server)
```csharp
var legue = new Legue {Name = "English Soccer"};
var team = new Team {Name = "Manchester", League = legue};
await ctx.Leagues.AddSync(legue);
await ctx.SaveChangesAsync();
```

## Selecting Data
- retrieving data
```csharp
// BAD - here we have have a refernce to the DbSet, no sql-querry has ran so far
var badAllLeagues = ctx.Legues;
// here the sql-querry will run.
foreach (var l in leagues) {
    Console.WriteLine($"{league.Name}");    // the "bad" thing here is that:
    // the db-connection will stay open for the whole duration of the loop
}

// GOOD - in the next line on the other hand we directly run the "select * from leagues"
var allLeagues = ctx.Legues.ToList();
foreach (var l in leagues) {                // at this line the db-connection is already closed
    Console.WriteLine($"{league.Name}");    // and everything happens in memory. 
}
```

- filtering data
```csharp
var leagues = await ctx.Leagues.Where(l => l.Name =="Bundesliega").ToListAsync();
var teams = await ctx.Teams.Where(t => t.Name.Contains("Bayern")).ToListAsync();
// we can use SQL-Native: sql-"LIKE" or sql-"Contains" with the EF.Functions.
var teams2 = await ctx.Teams.Where(t => EF.Functions.Like(t.Name, "%Wolfs%"));
```

```csharp
// firstOrDefault is expecting a list and will pick the first:
var first     = await ctx.Leagues
    .Where(l => l.Name.Contains("A"))
    .FirstOrDefaultAsync();
var alsofirst = await ctx.Leagues
    .FirstOrDefaultAsync(l => l.Name.Contains("A"));

// single is expacting EXACTLY one and will throw/null if multiple matches are found
var single   = await ctx.Leagues
    .Where(l => l.Name.Contains("c"))
    .SingleAsync();
var wontThrow = await ctx.Leagues
    .Where(l => l.Name.Contains("c"))
    .SingleOrDefaultAsync();
```

- aggregate functions:
```csharp
var leagues = ctx.Leagues;
var count = await leagues.CountAsync();         // SELECT COUNT(*)      -> int
var longCount = await leagues.LongCountAsync(); // SELECT COUNT_BIG(*)  -> int64
var min = await leagues.MinAsync();
var max = await leagues.MaxAsync();
```

- find by primary key (benefit of beeing fast)
```csharp
var f = await leagues.FindAsync(2); // where Id==2;
```
- alternative syntax:
```csharp
var teams = from i in ctx.Teams select i;   // select * from teams
var same = await (from i in ctx.Teams select i).ToListAsync();

var teams2 =    from i in ctx.Teams
                where i.Name="Fc Bayern"
                select i.Id;

```

## update and deleteing of data
- update
```csharp
var team = ctx.Teams.Find(2);
league.Name = "Newname";
ctx.SaveChanges();
```
- delete
    - by default Ef will generate relationships with on delete cascade.
```csharp
var listOfTeams = ctx.Teams.Where(t => t.Name=="Newname");
ctx.Teams.RemoveRange(listOfTeams);

var team = ctx.Teams.Find(2);
ctx.Team.Remove(team);
```
## Advanced
- AsNoTracking - in a scenario where we need reaonly data this releases data quicker, 
since EFCore does't have to keep track if the object gets changed etc.
```csharp
var withTrackingIsTheDefault = ctx.Teams.FirstOrDefault(q => q.Id == 2);
var withNoTracking = ctx.Teams.AsNoTracking().FirstOrDefault(q => q.Id == 2);

withTrackingIsTheDefault.Name = "this will get written in the db";
withNoTracking = "this change never touches our db";

var entriesBefore = ctx.ChangeTracker.Entries();    // breakpoint here
ctx.SaveChanges();
var entriesAfter = ctx.ChangeTracker.Entries();     // breakpoint here
```

## Relations between Tables
```csharp
public class Team {
    //...
    // here the foreign key is not nullable -> so will default on delte cascade when that table is removed etc.
    public int LeagueId { get; set; }

    // here on the other hand the Team can exists without a corresponding League. (on delete restrict would be generated etc...)
    public int? LeagueId { get; set; }

    // this by it's own would also generate a nullable foreign reference
    public virtual League League { get; set; }
}
```
- instead of having to write a manual query for all Teams of one league (would have to use a join) EF provides:
```csharp
public class League {
    // easy way to access corresponding teams for each League.
    public List<Team> Teams { get; set; }   // ICollection IEnumerable would also work the same
}
```