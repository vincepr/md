# basic vim motions

remapping idea: capslock to esc when pressed alone. and ctrl when pressed in combination with any other key. For a more natural hand position for ctrl+xyz etc...

- ctrl+P autocomplete (tab to switch suggestions

## modes
- i - insert before char. 
- a - insert after char
- ctrl+c to exit insert mode




## Movement
- hjkl - move left-up-down-right
- w - beginning next word (W includes. )
- e - end next word (E includes, or the full Iam_A_WORD(WORD) )
- b - move backwards to start of word (again with B to comined.ones() )
- ge - move backwards to end of word

### Searching chars
- f{char} - find and move to next occurance of char - only inside line
- F{char} - find and move to previous occurance of char - only inside line
- t{char} - find and move before char (like f)
- T{char} - find and move before char (like F)
- ; and , - (after using f or t) repeat search

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

### precision moveing
You can write regex here ex: `3/## .*` to find the next 3rd h2 in .md 
- `/{pattern}` to search forward
- `?{pattern}` to search backwards
- `n` to go to the next match
- `N` to go to the previous match

### code-navigation
- gd - go definition- under cursor to where code(function) is defined
- gf - go file - to file under cursor

- gg - top of file
- {line}gg - to line
- G - to end of file

## range selection
- . to represent the current line
- $ to represent last line in file buffer
- % to represent entire file

examples:
```
:2,10d      delete lines 2-10
:25,$d      delete from 25-eof
:%d         delete every line
:5,10t 15   copy lines 5-10 to 15
:5,10m 15   move lines 5-10 to 15
```