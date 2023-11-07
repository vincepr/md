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

## adding a base domain object for repeating fields
- fields like id, created by, updated at, created at, that many/all tables should have, it makes sense to layer them out to a base-object:
```csharp
public abstract class BaseDomainObject {
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

## n to m relations - many to many relations
adding to the above example: hometeam vs awayteam having one or many matches.
- so the same table is relating to another table twice:
```csharp
public class Match: BaseDomainObject {
    // for the following 2 References we broke away from default naming conventions. (Home-/Away-TeamId).
    // EF will not be able to automatically infer the relatin now:
    public int HomeTeamId { get; set; }
    public int AwayTeamId { get; set; }

    public virtual Team HomeTeam { get; set; }
    public virtual Team AwayTeam { get; set; }

    public DateTime Date { get; set; }
    public int HomeTeamResult { get; set; }
    public int AwayTeamResult { get; set; }
}
```

```csharp
public class Team : BaseDomainObject {
    public string Name { get; set; }
    public int LeagueId { get; set; }
    public virtual League League { get; set; }

    public virtual Coach Coach { get; set; }

    // again not neccessary, but to make querying matches of a specific team easier:
    public virtual List<Match> HomeMatches { get; set; }
    public virtual List<Match> AwayMatches { get; set; }
}
```
- Here the relation can not be infered by names alone so we have to be explicit about the foreign relation between the tables:
- the way this is done is by using the fluent api EF provides.
    - 
```csharp
public class MyDbContext : DbContext {
    // ....
    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<Team>()
            // here each line builds on the next:
            .HasMany(team => team.HomeMatches)  // one team has many HomeMatches
            .WithOne(match => match.HomeTeam)   // witch each HomeMatch having ONE HomeTeam
            .HasForeignKey(m => m.HomeTeamId)   // and corresponding FK is HomeTeamId
            .IsRequired()
            .OnDelte(DeleteBehavior.Restrict); // can not delete a team unless all Matches have been removed before.
        
        modelBuilder.Entity<Team>()
            .HasMany<Team>(t => team.AwayTeam)
            .WithOne(m => m.AwayTeam)
            .HasForeignKey(m => m.AwayTeamId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Restrict);
    }

    public DbSet<Team> Teamms { get; set; }
    public DbSet<Leagues> Leagues { get; set; }
    public DbSet<Matches> Matches { get; set; }
    public DbSet<Coach> Coaches { get; set; } 
}
```

```csharp
public class Coach : BaseDomainObject {
    public string Name { get; set; }
    public int? Team { get; set; } // coach can exist without training a team currently
    // and again the (unncessary) direct reference for convenience
    public virtual Team Team { get; set; }
}
```

- insert works as expected
```csharp
var newMatches = new List<Match> {
    new Match {AwayTeamId=1, HomeTeamId=2, Date= new DateTime(2023,4,22)},
    new Match {AwayTeamId=8, HomeTeamId=2, Date= DateTime.Now}
};

var coachFcBayern = new Coach {Name = "James Bond", TeamdId = 3};
var unemployedCoach = new Coach { Name = "Somebody" }; 

await ctx.AddRangeAsync(newMatches);
await ctx.AddAsync(coachFcBayern);
await ctx.AddAsync(unemployedCoach);
await ctx.SaveChangesAsync();
```

### Querying data from multiple tables at once
```csharp
// Get many related records:
var leagues = ctx.Leagues.Include(l => l.Teams).ToList();

// Get one related record:
var team = ctx.Teams.Include(t => t.Coach).FirstOrDefault(t => t.Id==3);

// Complex queries
// - we can do complex joins and nest them. 
// - .Includes() will refer to the "root" Teams and join ontop that
// - while each .ThenIncludes() works on the previously "included" join
var teamWithMatchesAndOpponents = ctx.Teams
    .Include(t => t.AwayMatches).ThenInclude(t => t.HomeTeam).ThenInclude(t => t.Coach)
    .ThenInclude(t => t.HomeTeam).ThenInclude(t => t.AwayTeam)
    .FirstOrDefault(t => t.Id == 1);

// filtering. All teams with Home matches:
var teams = ctx.Teams
    .Where(t => t.HomeMatches.Count > 0)
    .Include(t => t.Coach)
    .ToList();

// filtering with related data. Ex i know part of a team and i want to know what league that team is in:
var leagues = ctx.Leagues
    .Where(l => l.Teams.Any(t => t.Name.Contains("Bayern")))
    .toList();
```

- another quick example for a n to m relation:
```csharp
public class Student {
    public int StudentId { get; set; }
    public string StudentName { get; set; }
    public virtual ICollection<Course> Courses { get; set; }
}

public class Course {
    public int CourseId { get; set; }
    public string CourseName { get; set; }
    public virtual ICollection<Student> Students { get; set; }
}

public class SchoolDbContext : DbContext {
    modelBuilder.Entity<Student>()
        .HasMany<Cource>(s => s.Cources)
        .WithMany(c => c.Students)
        .Map(cs => {
            cs.MapLeftKey("StudentRefId");
            cs.MapRightKey("CourceRefId");
            cs.ToTable("StudentCourse");
        });
}
```

## Anonymous data types
```csharp
List<string> teamNames = ctx.Teams.Select(t => t.Name).ToList();

// touples:
var teamsT = ctx.Teams.Include(t => t.Coach).Select(t => (t.Name, t.Id)).ToList();
// anonymous obj:
var teamsO = ctx.Teams.Include(t => t.Coach).Select(t => new {
    TeamName = t.Name, CoachName = t.Coach.Name
    }).ToList();
var teams = ctx.
```

## Raw Sql in EF
- we want to add a sql-function and an sql-view but still benefit from adding it with our migrations (eg we can roll them back etc...)

1. We create an empty migration (without any changes that would generate code)
2. When we check the Migration generated it should look like this:

```csharp
public partial class AddingTeamDetailsViewAndEarlyMatchFunction : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder) 
    {

    }
    protected override void Down(MigrationBuilder migrationBuilder) 
    {

    }
}
```

3. We add our manually created sql:
```csharp
public partial class AddingTeamDetailsViewAndEarlyMatchFunction : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder) 
    {
        migrationBuilder.Sql(@"CREATE FUNCTION [dbo].[GetEarliestMatch] (@teamId int)
                                RETURNS datetime
                                BEGIN
                                    DECLARE @result datetime
                                    SELECT TOP 1 @result = date
                                    FROM [dbo].[Matches]
                                    order by Date
                                    return @result
                                END");
        migrationBuilder.Sql(@"CREATE VIEW [dbo].[TeamsCoachesLeagues]
                                AS
                                SELECT t.Name, c.Name AS CoachName, l.Name AS LeagueName
                                FROM dbo.Teams AS t LEFT OUTER JOIN
                                    dbo.Coaches AS c ON t.Id = c.Team.Id INNER JOIN
                                    dbo.Leagues AS l ON t.LeagueId = l.Id");
    }
    protected override void Down(MigrationBuilder migrationBuilder) 
    {
        // we MUST also manually add the drop statements to rollback:
        migrationBuilder.Sql("@DROP VIEW [dbo].[TeamscoachesLeagues]");
        migrationBuilder.Sql("@DROP Function [dbo].[GetEarliestMatch]");
    }
}
```


### interacting with a view in EF
- we create a new DataClass that corresponds with the already existing view:
```csharp
public class TeamsCoachesLeaguesView {
    public string Name { get; set; }
    public string CoachName { get; set; }
    public string LeagueName { get; set; }
}

// we must also add it to our dbContext:
public class MyDbContext : DbContext {
    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<TeamsCoachesLeaguesView>()
            .HasNoKey()    // We MUST explicitly tell EF that this is a kekyless view
            .ToView("TeamsCoachesLeagues"); // just to make sure EF correctly maps this to the view and doesnt try to create a new table
            }
    public DbSet<TeamsCoachesLeaguesView> TeamsCoachesLeagues { get; set; }
}

// now we can use it "just like a table"
var details = ctx.TeamsCoachesLeagues.ToList();
```


### executing raw sql
- selects with raw sql are really limited:
```csharp
// this is not guarded against SQl-Injections!
// - also .FromSqlRaw has to return the whole dataset that matches to the Teams-object
//    so "SELECT *" will work "SELECT Name, Id" not because it is missing some Teams-object attributes
var teams1 = ctx.Teams.FromSqlRaw("SELECT * FROM Teams").ToList();

// this is save against sql-injections. But still has the above limitations.
var name = "Fc Bayern";
var teams2 = ctx.Teams.FromSqlInterpolated($"SELECT * FROM Teams where name={name}").ToListAsync();
```

### Adding and executing a stored procedure
- again we write our own migration:
```csharp
public partial class AddingTeamDetailsViewAndEarlyMatchFunction : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder) 
    {
        migrationBuilder.Sql(@"CREATE PROCEDURE sp_DeleteTeamById
                                @teamId int
                            AS
                            BEGIN
                                Delete from Teams where Id = @teamId
                            END");
    }
    protected override void Down(MigrationBuilder migrationBuilder) 
    {
        migrationBuilder.Sql(@"DROP PROCEDURE [dbo].[sp_DeleteTeamById]");
    }
}
```

```csharp
static void ExecuteNonQueryCommand() {
    // BAD (again not guared against sql-injection)
    var teamId = 2;
    var affectedRows = ctx.Database.ExecuteSqlRaw("exec sp_DeleteTeamById {0}", teamId);
    
    // again the better variant:
    var teamId2 = 3;
    var affectedRows2 = ctx.Database.ExecuteSqlInterpolated($"exec sp_DeleteTeamById {teamId2}");
}

static void ExecuteStoredProcedure() {
    var teamId = 4;
    result = ctx.Coaches.FromSqlRaw("EXEC dbo.sp_GetTeamCoach {0}, teamId").ToList();
}
```

## Seed Data
- Default data
    - either for testing in a dev environment
    - to create some default data like a list of all supported Languages etc...

```csharp
public class MyDbContext : DbContext {
    //...
    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<League>()
            .HasData(
                new League{ Id=1, Name="Bundesliega" } 
            )
        modelBuilder.Entity<Coach>()
            .HasData(
                new Team { Id=1, Name="Fc Bayern", LeagueId=1},
                new Team { Id=2, Name="Redbull Leipzig", LeagueId=1},
            );
        // to be a bit more cleaner we can extract all of this out:
        modelBuilder.ApplyConfiguration(new CoachSeedConfiguration()):
    }
}
```

```csharp
public class CoachSeedConfiguration : IEntityTypeConfiguration<Coach> {
    public void Configure(EntityTypeBuilder<Coach> builder) {
        builder.HasData(
            new Coach { Id=20, Name="Rob Stark", TeamId=1},
            new Coach { Id=21, Name="Sansa Stark", TeamId=2},
        )
    }
}
```

## Change tracking - 
- we override what happens when changes get saved.
    - we can use this to for example add runtime checking of certain constraints

```csharp
public abstract class BaseDomainObject {
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public User CreatedBy { get; set; }
    public User ModifiedBy { get; set; }
}

public class MyDbContext : DbContext {
    protected override async Task<int> SaveChangesAsync(CancellationToken cancellationToken=default) {

        // A list of Entries(in memory) that will get written to the db:
        ChangeTracker.Entries();

        // we have a few enums to check for state data is in:
        // EntityState.Unchanged | Added | Detached | Modified | Deleted

        var modifiedEntires = ChangeTracker.Entries()
            .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);
        
        foreach(var entry in modifiedEntries) {
            var e = (BaseDomainObject)entry.Entity;
            e.ModifiedDate = DateTime.Now;
            e.ModifiedBy = User.Current();

            if (entry.State == EntityState.Added) {
                e.CreatedDate = DateTime.Now;
                e.CreatedBy = User.Current();
            }
        }
        return base.SaveChangesAsync(cancellationToken);
    }
}
```
- we have to be minful here when overriding SaveChangesAsync() we ONLY override this one Function.
    - And SaveChangesAsync(CancellationToken c), SaveChanges(), SaveChanges(CancellationToken c) might not be targeted by our custom logic.

## Constraints and Default Values - with fluent api
```csharp
public MyDbContext : DbContext {
    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<Team>()
            .Property(t => t.Name).HasMaxLength(50);
        
        // we can tell EF to create index tables -> high speed lookup by this row:
        modelBuilder.Entity<League>()
            .HasIndex(l => l.Name);
        
        // enforcing a value to be unique:
        modelBuilder.Entity<League>()
            .Property(l => l.Name).IsUnique();
        
        // enforcing a combination of values to be unique:
        modelBuilder.Entity<Coach>()
            .HasIndex(c => new { c.Name, c.TeamId}).IsUnique();
        
    }
}
```


## resilient connections - retry policies
- packets might be dropped, actions might fail.
```csharp
public MyDbContext : DbContext {
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseSqlServer("connectionstring", sqlOptions => {
            sqlOptions.EnableRetryOnFailure(
                maxRetryCount: 5, 
                maxRetryDelay: TimeSpan.Fromseconds(30),
                errorNumversToAdd: null,
                )
        });
    }
}
```
