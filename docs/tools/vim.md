# basic vim motions

## autocomplete
- ctrl+P autocomplete tab to switch suggestions
- ctrl+N autocomplete tab to switch the other direction

## insert-modes
- `i` - insert before cursor. (`I` start of line) 
- `a` - insert after cursor. (`A` end of line)
- `o` - add newline then insert (`O` for above)
- `gi` - insert mode at last change


- `ctrl+c` to exit insert mode
- `ctrl+h` delete last char typed
- `ctrl+w` delete last word typed
- `ctrl+u` delete last line typed

## select-mode
```
v{motion}{operator}
```

Used to select text.
- `v` - visual mode character
- `V` - visual mode linewise
- `<C-V>` - visual block
- `af` - selects increasing large blocks
- `gh` - hover mouse over cursor (ex for type info)

## vscode-fileexplorer
- `ctrl+w THEN h` - to move left one tab 
- `ctrl+p` - go to file
- `ctrl+shift+o` - go to symbol in file
- `ctrl+t` - go to symbol in workspace

## cmd-mode
- `:edit {relative-path-to-file.js}` - to create a new file. Same as`:e`
- `:write`, `:w` - save file. `:wall` to save all
- `:quit`, `:q` - quit.
- `:q!` - ignores complains q might have (ex not saved warning)
- `wq` - save then quit. `wall` to save all



## Movement
- `hjkl` - move left-up-down-right
- `w` - beginning next word (W includes. )
- `e` - end next word (E includes, or the full Iam_A_WORD(WORD) )
- `b` - move backwards to start of word (again with B to comined.ones() )
- `ge` - move backwards to end of word

### Searching in line of chars
- `f{char}` - find and move to next occurance of char - only inside line
- `F{char}` - find and move to previous occurance of char - only inside line
- `t{char}` - find and move unTil/before char (like f)
- `T{char}` - find and move unTil/before char (like F)
- `;` and `,` - (after using f or t) repeat search

### big horizontal moves
- `0`: Moves to the first character of a line
- `^`: Moves to the first non-blank character of a line
- `$`: Moves to the end of a line
- `g_`: Moves to the non-blank character at the end of a line

### big vertical moves
- `}` jumps entire paragraphs downwards
- `{` similarly but upwards
- `CTRL-D` lets you move down half a page by scrolling the page
- `CTRL-U` lets you move up half a page also by scrolling

### searching moves (accept regex)
You can write regex here ex: `3/## .*` to find the next 3rd h2 in .md 
- `/{pattern}` to search forward
- `?{pattern}` to search backwards
- `n` to go to the next match
- `N` to go to the previous match
- `gn and gN` combine next functionalitz with operation. so `.` goes next then deletes...

- `/ENTER ?ENTER` - last search
- `*` - search word under cursor 

### code navigation
- `gd` - go definition- under cursor to where code(function) is defined
- `gf` - go file - to file under cursor

- `gg` - top of file
- `{line}gg` - to line
- `G` - to end of file
- `%` - jump to matching `*({[]})`

## range selection
- `.` to represent the current line
- `$` to represent last line in file buffer
- `%` to represent entire file

examples:
```
:2,10d      delete lines 2-10
:25,$d      delete from 25-eof
:%d         delete every line
:5,10t 15   copy lines 5-10 to 15
:5,10m 15   move lines 5-10 to 15
```

## Editing
- `u` - undo
- `ctrl R` - redo


- `ctrl o` - go back to where cursor was before
- `ctrl i` - go forward to in cursor history
```
{operator}{count}{motion}
2dw         delete 2 words
```

- `x` - shortform of `dl` deletes char under cursor
- `X` - shortform of `dh` delete char before cursor
- `s` - shortform of `ch` deletes char under cursor and inserts
- `~` switch case for single char
### Operators
- `d` - delete
- `c` - change (deletes and enters insert)

- `=` - format code
- `gUw` - uppercase word / `g~` - toggle case
- `>` / `<` - add/remove indentation


**Doubling** an operator, operates on whole line: `dd` - deletes whole line

**Bold** an operator is till end-of-line: `D` - deletes till end-of-line


- Examples:
```
d2w         deletes 2 words
dt;         deletes untill ;
d/hello     deletes untill hello
```

- `.` - dot-operator - **repeats** last change


#### Copy paste
- `y` - yank (copy) - `yy` copy line
- `p` / `P` - paste after/before cursor
- `gp` & `gP` - same as p but cursor after pasted
```
yl yanks a letter,
yaw yanks a word,
yas yanks a sentence
yi( yanks everything within (
ddp  ddP   swap lines
```
#### cut and paste
d or c actually cut. so we can just `dd` a line then `p` it where we want it 

#### text objects
The benefit of these is that they care less about where the cursor is pointed. so they become more reusable with `.`

```
{operator}{a|i}{text-object}
```
- `i` - inner
- `a` - outer

|- |identifiers|
|---|---|
|`w`| word|
|`s`|sentence|
|`p`|paragraph|
|`b` or `(`|block inside `()`|
|`[`|block inside `[]`|
|`B` pr `{`|block inside `{}`|
|`"` or `'`|quoted text|
|`t`| for tag|

examples:
```
daw       delete a word + trailing whitespace
ciw       change inner word
das       delete a sentance
da"       delete something in quotes 
ci"       change text inside quotes
dat       delete a html-tag
cit       change contents of an html-tag

imange we want to delete all this
/this ENTER
daw
THEN n THEN . for each time we find one we want to delete
```

## copy paste