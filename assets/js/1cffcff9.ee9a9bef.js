"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(n),u=l,c=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={},r="basic vim motions",o={unversionedId:"tools/vim",id:"tools/vim",title:"basic vim motions",description:"vim settings for vscode",source:"@site/docs/tools/vim.md",sourceDirName:"tools",slug:"/tools/vim",permalink:"/md/tools/vim",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/tools/vim.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prototyping Tools",permalink:"/md/tools/prototyping"},next:{title:"webdev",permalink:"/md/category/webdev"}},p={},d=[{value:"vim settings for vscode",id:"vim-settings-for-vscode",level:2},{value:"autocomplete",id:"autocomplete",level:2},{value:"insert-modes",id:"insert-modes",level:2},{value:"select-mode",id:"select-mode",level:2},{value:"vscode-fileexplorer",id:"vscode-fileexplorer",level:2},{value:"cmd-mode",id:"cmd-mode",level:2},{value:"Movement",id:"movement",level:2},{value:"Searching in line of chars",id:"searching-in-line-of-chars",level:3},{value:"big horizontal moves",id:"big-horizontal-moves",level:3},{value:"big vertical moves",id:"big-vertical-moves",level:3},{value:"searching moves (accept regex)",id:"searching-moves-accept-regex",level:3},{value:"code navigation",id:"code-navigation",level:3},{value:"range selection",id:"range-selection",level:2},{value:"Editing",id:"editing",level:2},{value:"Operators",id:"operators",level:3},{value:"Copy paste",id:"copy-paste",level:4},{value:"cut and paste",id:"cut-and-paste",level:4},{value:"text objects",id:"text-objects",level:4},{value:"copy paste",id:"copy-paste-1",level:2}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"basic-vim-motions"},"basic vim motions"),(0,l.kt)("h2",{id:"vim-settings-for-vscode"},"vim settings for vscode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"keyboard shortcuts - disable both ",(0,l.kt)("inlineCode",{parentName:"li"},"extension.vim_shift+tab")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"extension.vim_tab")),(0,l.kt)("li",{parentName:"ul"},'ctrl shift p "settings json"')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    "vim.highlightedyank.enable": true,\n    "vim.highlightedyank.duration": 1000,\n    "vim.handleKeys": {\n        "<C-d>": false,\n        "<C-v>": false,\n        "<C-x>": false,\n    },\n    // For visual mode\n    "vim.visualModeKeyBindings": [\n        {\n        "before": ["<C-c>"],\n        "after": ["\\"", "+", "y"]\n        },\n        {\n        "before": ["<C-v>"], \n        "after":  ["\\"", "+", "p"]\n        }\n    ],\n    // For normal mode\n    "vim.normalModeKeyBindings": [\n        {\n        "before": ["<C-c>"],\n        "after": ["\\"", "+", "y"]\n        },\n        {\n        "before": ["<C-v>"], \n        "after":  ["\\"", "+", "p"]\n        }\n    ],\n    "vim.overrideCopy": false,\n    "vim.sneak": true,\n')),(0,l.kt)("h2",{id:"autocomplete"},"autocomplete"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ctrl+P autocomplete tab to switch suggestions")),(0,l.kt)("h2",{id:"insert-modes"},"insert-modes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"i")," - insert before cursor. (",(0,l.kt)("inlineCode",{parentName:"li"},"I")," start of line) "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a")," - insert after cursor. (",(0,l.kt)("inlineCode",{parentName:"li"},"A")," end of line)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"o")," - add newline then insert (",(0,l.kt)("inlineCode",{parentName:"li"},"O")," for above)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gi")," - insert mode at last change")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+c")," to exit insert mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+h")," delete last char typed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+w")," delete last word typed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+u")," delete last line typed")),(0,l.kt)("h2",{id:"select-mode"},"select-mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"v{motion}{operator}\n")),(0,l.kt)("p",null,"Used to select text."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"v")," - visual mode character"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"V")," - visual mode linewise"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<C-V>")," - visual block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"af")," - selects increasing large blocks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gh")," - hover mouse over cursor (ex for type info)")),(0,l.kt)("h2",{id:"vscode-fileexplorer"},"vscode-fileexplorer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+w THEN h")," - to move left one tab "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+p")," - go to file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+shift+o")," - go to symbol in file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl+t")," - go to symbol in workspace")),(0,l.kt)("h2",{id:"cmd-mode"},"cmd-mode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":edit {relative-path-to-file.js}")," - to create a new file. Same as",(0,l.kt)("inlineCode",{parentName:"li"},":e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":write"),", ",(0,l.kt)("inlineCode",{parentName:"li"},":w")," - save file. ",(0,l.kt)("inlineCode",{parentName:"li"},":wall")," to save all"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":quit"),", ",(0,l.kt)("inlineCode",{parentName:"li"},":q")," - quit."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":q!")," - ignores complains q might have (ex not saved warning)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wq")," - save then quit. ",(0,l.kt)("inlineCode",{parentName:"li"},"wall")," to save all")),(0,l.kt)("h2",{id:"movement"},"Movement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hjkl")," - move left-up-down-right"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"w")," - beginning next word (W includes. )"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"e")," - end next word (E includes, or the full Iam_A_WORD(WORD) )"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b")," - move backwards to start of word (again with B to comined.ones() )"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ge")," - move backwards to end of word")),(0,l.kt)("h3",{id:"searching-in-line-of-chars"},"Searching in line of chars"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"f{char}")," - find and move to next occurance of char - only inside line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"F{char}")," - find and move to previous occurance of char - only inside line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"t{char}")," - find and move unTil/before char (like f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"T{char}")," - find and move unTil/before char (like F)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},";")," and ",(0,l.kt)("inlineCode",{parentName:"li"},",")," - (after using f or t) repeat search")),(0,l.kt)("h3",{id:"big-horizontal-moves"},"big horizontal moves"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),": Moves to the first character of a line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"^"),": Moves to the first non-blank character of a line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$"),": Moves to the end of a line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g_"),": Moves to the non-blank character at the end of a line")),(0,l.kt)("h3",{id:"big-vertical-moves"},"big vertical moves"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"}")," jumps entire paragraphs downwards"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{")," similarly but upwards"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CTRL-D")," lets you move down half a page by scrolling the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CTRL-U")," lets you move up half a page also by scrolling")),(0,l.kt)("h3",{id:"searching-moves-accept-regex"},"searching moves (accept regex)"),(0,l.kt)("p",null,"You can write regex here ex: ",(0,l.kt)("inlineCode",{parentName:"p"},"3/## .*")," to find the next 3rd h2 in .md "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/{pattern}")," to search forward")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"?{pattern}")," to search backwards")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"n")," to go to the next match")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"N")," to go to the previous match")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gn and gN")," combine next functionalitz with operation. so ",(0,l.kt)("inlineCode",{parentName:"p"},".")," goes next then deletes...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/ENTER ?ENTER")," - last search")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"*")," - search word under cursor "))),(0,l.kt)("h3",{id:"code-navigation"},"code navigation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gd")," - go definition- under cursor to where code(function) is defined")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gf")," - go file - to file under cursor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gg")," - top of file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{line}gg")," - to line")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"G")," - to end of file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"%")," - jump to matching ",(0,l.kt)("inlineCode",{parentName:"p"},"*({[]})")))),(0,l.kt)("h2",{id:"range-selection"},"range selection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".")," to represent the current line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$")," to represent last line in file buffer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%")," to represent entire file")),(0,l.kt)("p",null,"examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":2,10d      delete lines 2-10\n:25,$d      delete from 25-eof\n:%d         delete every line\n:5,10t 15   copy lines 5-10 to 15\n:5,10m 15   move lines 5-10 to 15\n")),(0,l.kt)("h2",{id:"editing"},"Editing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"u")," - undo"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl R")," - redo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl o")," - go back to where cursor was before"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctrl i")," - go forward to in cursor history")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{operator}{count}{motion}\n2dw         delete 2 words\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," - shortform of ",(0,l.kt)("inlineCode",{parentName:"li"},"dl")," deletes char under cursor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X")," - shortform of ",(0,l.kt)("inlineCode",{parentName:"li"},"dh")," delete char before cursor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," - shortform of ",(0,l.kt)("inlineCode",{parentName:"li"},"ch")," deletes char under cursor and inserts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~")," switch case for single char")),(0,l.kt)("h3",{id:"operators"},"Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"d")," - delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"c")," - change (deletes and enters insert)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"=")," - format code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gUw")," - uppercase word / ",(0,l.kt)("inlineCode",{parentName:"p"},"g~")," - toggle case")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},">")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"<")," - add/remove indentation"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Doubling")," an operator, operates on whole line: ",(0,l.kt)("inlineCode",{parentName:"p"},"dd")," - deletes whole line"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bold")," an operator is till end-of-line: ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," - deletes till end-of-line"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"d2w         deletes 2 words\ndt;         deletes untill ;\nd/hello     deletes untill hello\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".")," - dot-operator - ",(0,l.kt)("strong",{parentName:"li"},"repeats")," last change")),(0,l.kt)("h4",{id:"copy-paste"},"Copy paste"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y")," - yank (copy) - ",(0,l.kt)("inlineCode",{parentName:"li"},"yy")," copy line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"P")," - paste after/before cursor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gp")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"gP")," - same as p but cursor after pasted")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yl yanks a letter,\nyaw yanks a word,\nyas yanks a sentence\nyi( yanks everything within (\nddp  ddP   swap lines\n")),(0,l.kt)("h4",{id:"cut-and-paste"},"cut and paste"),(0,l.kt)("p",null,"d or c actually cut. so we can just ",(0,l.kt)("inlineCode",{parentName:"p"},"dd")," a line then ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," it where we want it "),(0,l.kt)("h4",{id:"text-objects"},"text objects"),(0,l.kt)("p",null,"The benefit of these is that they care less about where the cursor is pointed. so they become more reusable with ",(0,l.kt)("inlineCode",{parentName:"p"},".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{operator}{a|i}{text-object}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"i")," - inner"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a")," - outer")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"-"),(0,l.kt)("th",{parentName:"tr",align:null},"identifiers"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"w")),(0,l.kt)("td",{parentName:"tr",align:null},"word")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:null},"sentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:null},"paragraph")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"(")),(0,l.kt)("td",{parentName:"tr",align:null},"block inside ",(0,l.kt)("inlineCode",{parentName:"td"},"()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[")),(0,l.kt)("td",{parentName:"tr",align:null},"block inside ",(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"B")," pr ",(0,l.kt)("inlineCode",{parentName:"td"},"{")),(0,l.kt)("td",{parentName:"tr",align:null},"block inside ",(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"')," or ",(0,l.kt)("inlineCode",{parentName:"td"},"'")),(0,l.kt)("td",{parentName:"tr",align:null},"quoted text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"t")),(0,l.kt)("td",{parentName:"tr",align:null},"for tag")))),(0,l.kt)("p",null,"examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'daw       delete a word + trailing whitespace\nciw       change inner word\ndas       delete a sentance\nda"       delete something in quotes \nci"       change text inside quotes\ndat       delete a html-tag\ncit       change contents of an html-tag\n\nimange we want to delete all this\n/this ENTER\ndaw\nTHEN n THEN . for each time we find one we want to delete\n')),(0,l.kt)("h2",{id:"copy-paste-1"},"copy paste"))}k.isMDXComponent=!0}}]);