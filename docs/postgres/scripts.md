# Postgres scripts of daily use

### Kill long running queries
```sql
SELECT pid, now() - pg_stat_activity.query_start AS duration, query
FROM pg_stat_activity
WHERE (now() - pg_stat_activity.query_start) > interval '2 minutes'; 
```

and kill it:
```sql
SELECT pg_terminate_backend(pid) as killed, query
FROM pg_stat_activity
WHERE (now() - pg_stat_activity.query_start) > interval '2 minutes'; 
```


### Database size
```sql
SELECT schema_name, relname, pg_size_pretty(table_size) AS size, table_size
FROM (SELECT n.nspname AS schema_name, c.relname, pg_relation_size(c.oid) AS table_size
      FROM pg_catalog.pg_class c
               JOIN pg_catalog.pg_namespace n ON c.relnamespace = n.oid) t
WHERE schema_name NOT LIKE 'pg_%'
ORDER BY table_size DESC;
```

### Create DDL for MCP or Agent comprehension
Great tool for use with an mcp or to quickly allow a agent to gather all required info about a database in a concise way.

* after postgres 16 go with `SELECT pg_get_tabledef(oid) FROM pg_class WHERE relkind = 'r';` supports **COMMENTS**
```sql
SELECT
    'CREATE TABLE ' || n.nspname || '.' || c.relname || E' (\n' ||
    string_agg(definition, E',\n' ORDER BY sort_order) ||
    E'\n);' AS create_table_sql
FROM pg_class c
         JOIN pg_namespace n ON n.oid = c.relnamespace  -- get schema name

         JOIN (
    -- column definitions
    SELECT
        a.attrelid,
        '  ' || a.attname || ' ' ||
        pg_catalog.format_type(a.atttypid, a.atttypmod) ||
        CASE WHEN a.attnotnull THEN ' NOT NULL' ELSE '' END AS definition,
        a.attnum AS sort_order  -- columns use attnum
    FROM pg_attribute a
    WHERE a.attnum > 0
      AND NOT a.attisdropped

    UNION ALL

    -- primary key constraints
    SELECT
        con.conrelid AS attrelid,
        '  ' || pg_get_constraintdef(con.oid) AS definition,
        100000 * 1 + row_number() OVER (PARTITION BY con.conrelid ORDER BY con.oid) AS sort_order
    FROM pg_constraint con
    WHERE con.contype = 'p'

    UNION ALL

    -- foreign key constraints
    SELECT
        con.conrelid AS attrelid,
        '  ' || pg_get_constraintdef(con.oid) AS definition,
        100000 * 2 + row_number() OVER (PARTITION BY con.conrelid ORDER BY con.oid) AS sort_order
    FROM pg_constraint con
    WHERE con.contype = 'f'

) defs ON defs.attrelid = c.oid

WHERE c.relkind = 'r'
  AND n.nspname NOT IN ('pg_catalog', 'information_schema')  -- skip system schemas
GROUP BY n.nspname, c.relname;
```
 
Example output:
```
-- script will return one row per table
CREATE TABLE public.Authors (
  Id integer NOT NULL,
  Name text NOT NULL,
  PRIMARY KEY (""Id"")
);
CREATE TABLE public.Books (
  Id integer NOT NULL,
  Title text NOT NULL,
  Price numeric NOT NULL,
  AuthorId integer NOT NULL,
  PRIMARY KEY (""Id""),
  FOREIGN KEY (""AuthorId"") REFERENCES ""Authors""(""Id"") ON DELETE CASCADE
);
CREATE TABLE public.Courses (
  Id integer NOT NULL,
  Title text NOT NULL,
  PRIMARY KEY (""Id"")
);
CREATE TABLE public.StudentCourses (
  StudentId integer NOT NULL,
  CourseId integer NOT NULL,
  EnrolledAt timestamp with time zone NOT NULL,
  PRIMARY KEY (""StudentId"", ""CourseId""),
  FOREIGN KEY (""CourseId"") REFERENCES ""Courses""(""Id"") ON DELETE CASCADE,
  FOREIGN KEY (""StudentId"") REFERENCES ""Students""(""Id"") ON DELETE CASCADE
);
CREATE TABLE public.Students (
  Id integer NOT NULL,
  Name text NOT NULL,
  PRIMARY KEY (""Id"")
);
CREATE TABLE internal.UserProfiles (
  UserId integer NOT NULL,
  FirstName text NOT NULL,
  LastName text NOT NULL,
  BirthDate date NOT NULL,
  PRIMARY KEY (""UserId""),
  FOREIGN KEY (""UserId"") REFERENCES ""Users""(""Id"") ON DELETE CASCADE
);
CREATE TABLE internal.Users (
  Id integer NOT NULL,
  Email text NOT NULL,
  CreatedAt timestamp with time zone NOT NULL,
  PRIMARY KEY (""Id"")
);
```

Alternative minimal variant to save tokens:
```sql
SELECT 'CREATE TABLE ' || relname || E' (\n' ||
       string_agg(
               '  ' || a.attname || ' ' || pg_catalog.format_type(a.atttypid, a.atttypmod),
               E',\n'
       ) || E'\n);'
FROM pg_class c
         JOIN pg_attribute a ON a.attrelid = c.oid
WHERE c.relkind = 'r'
  AND c.relname !~ '^(pg|sql)_'
  AND a.attnum > 0
  AND NOT a.attisdropped
GROUP BY relname;
```