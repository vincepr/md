# Makefiles - mostly for c

## The basic Makefile
Here we just Define all our files by hand (here chunk.c main.c and memory.c)

Then we can just call `make` in the terminal and it will only compile output files (.o files) that have been touched freshly.

```Makefile
# whenever main.o or chunk.o (the 2 objectfiles) change we recompile output binary
output: main.o chunk.o memory.c
	gcc main.o chunk.o memory.c -o output

# everytime main.c changes -> compile it to an object file (-c means target outputfile is main.o)
main.o: main.c
	gcc -c main.c

# everytime chunk.c changes -> compile it to an object file (-c means target outputfile is chunk.o)
chunk.o: chunk.c
	gcc -c chunk.c

memory.o: memory.c
	gcc -c memory.c

# we call these from terminal to remove artifacts
clean:
	rm *.o output
```

## Pattern matching but still a basic Makefile

Here we would still have to list all files by hand (main.c chunk.c memory.c ...) But pattern match the rule for each corresponding output file
```Makefile
## compiler settings:
# FLAGS=-Wall -Wextra -g -I -03

## list all cfiles (.c) that our project includes
CCFILES=main.c chunk.c memory.c
## list all the .o object files that get created (before linking?)
OBJECTS=main.o chunk.o memory.o

## name of our executable we build to run
BINARY=bin


## build the binary
all: $(BINARY)

## basically a "rule" that requires all the object files need to be created before we can build the binary
$(BINARY): $(OBJECTS)
	gcc -o $@ $^

## (%-signs are wildcards/regex.) To build out all the .o object files
%.o:%.c
	gcc -c -o $@ $^
## with flags the above would be: gcc $(FLAGS) -c -o $@ $^

## manual command to remove all artifacts
clean:
	rm -rf $(BINARY) *.o
```


## A Proper Makefile

The above makefiles have a **Big Problem**. When a .h headerfile gets changed and thus the corresponding outputfile needs to be recompiled, Makefile will not see this change, because its in a dependency only.(ex if a constant value in `memory.h` changes `memory.o` will NOT recompile)

```Makefile
BINARY=bin
CODEDIRS=. mylib
INCDIRS=. ./include/ # can be list

CC=gcc
OPT=-O0
# generate files that encode make rules for the .h dependencies
DEPFLAGS=-MP -MD
# automatically add the -I onto each include directory
CFLAGS=-Wall -Wextra -g $(foreach D,$(INCDIRS),-I$(D)) $(OPT) $(DEPFLAGS)

# for-style iteration (foreach) and regular expression completions (wildcard)
CFILES=$(foreach D,$(CODEDIRS),$(wildcard $(D)/*.c))
# regular expression replacement
OBJECTS=$(patsubst %.c,%.o,$(CFILES))
DEPFILES=$(patsubst %.c,%.d,$(CFILES))

all: $(BINARY)

$(BINARY): $(OBJECTS)
	$(CC) -o $@ $^

# only want the .c file dependency here, thus $< instead of $^.
#
%.o:%.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	rm -rf $(BINARY) $(OBJECTS) $(DEPFILES)

# shell commands are a set of keystrokes away
distribute: clean
	tar zcvf dist.tgz *

# @ silences the printing of the command
# $(info ...) prints output
diff:
	$(info The status of the repository, and the volume of per-file changes:)
	@git status
	@git diff --stat

# include the dependencies
-include $(DEPFILES)

# add .PHONY so that the non-targetfile - rules work even if a file with the same name exists.
.PHONY: all clean distribute diff
```
- The `DEPFLAGS=-MP -MD` Voodoo-Magic will coupple our gcc and Makefile. To automate .h changes be included in our simple make command
- The only code that would have to be changed for the most part are the first 3 lines.
    - `BINARY=bin` defining the binary name we build
    - `CODEDIRS=. mylib` defining folders that include our code .c files (current directory and `./mylib` in this case)
    - `` defining folders that include extra .h files etc (in this case again current folder and ./include/)