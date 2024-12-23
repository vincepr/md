"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4899],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return t?i.createElement(g,r(r({ref:n},m),{},{components:t})):i.createElement(g,r({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={},r="editor Settings",l={unversionedId:"settings/editorSettings",id:"settings/editorSettings",title:"editor Settings",description:"Settings for Vscode",source:"@site/docs/settings/editorSettings.md",sourceDirName:"settings",slug:"/settings/editorSettings",permalink:"/md/settings/editorSettings",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/settings/editorSettings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"install codeserver",permalink:"/md/settings/codeserver"},next:{title:"nginx",permalink:"/md/settings/nginx"}},s={},c=[{value:"Settings for Vscode",id:"settings-for-vscode",level:2},{value:"Settings for Rider, Settings for Intellij-products",id:"settings-for-rider-settings-for-intellij-products",level:2},{value:"Download",id:"download",level:3},{value:"Step by Step",id:"step-by-step",level:3}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editor-settings"},"editor Settings"),(0,o.kt)("h2",{id:"settings-for-vscode"},"Settings for Vscode"),(0,o.kt)("p",null,"openvscode-server location for the global settings: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.vscode-remote/data/Machine/settings.json")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "thunder-client.defaultUrl": "http://127.0.0.1:5555/",\n    /// base settings\n    "workbench.colorTheme": "Default Dark Modern",\n    "files.autoSave": "afterDelay",  // enable this if hotreloading is killing performance for remote work\n    "files.simpleDialog.enable": true,\n    // "terminal.integrated.allowChords": false,\n    // "window.commandCenter": false,\n    /// git settings\n    "git.enableSmartCommit": true,\n    "git.autofetch": true,\n    /// vim settings\n    "vim.highlightedyank.enable": true,\n    "vim.highlightedyank.duration": 1000,\n    "vim.sneak": true,\n    "vim.handleKeys": {\n        "<C-x>": false,\n        "<C-v>": false,\n        "<C-a>": false,\n        "<C-f>": false,\n        "<C-e>": false,\n        "<C-y>": false,\n        "<C-z>": false, \n        "<C-b>": false,\n        "<C-c>": false,\n    },\n    "vim.normalModeKeyBindings": [\n        {\n            "before": ["g", "i"],\n            "commands": ["editor.action.goToImplementation"]\n        },\n        {\n            "before": ["g", "f"],\n            "commands": ["editor.action.formatDocument"]\n        },\n    ],\n    "editor.emptySelectionClipboard": false,    // stop copy empty line on ctrl+c exit input mode\n    "vim.insertModeKeyBindings": [\n        {\n            "before": ["<C-c>"],\n            "commands": ["editor.action.clipboardCopyAction", "extension.vim_escape"]\n        },\n    ],\n    "editor.codeLens": false,\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ctrl shift P and ",(0,o.kt)("inlineCode",{parentName:"li"},"open keyboard shortcuts (json)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Place your key bindings in this file to override the defaultsauto[]\n[\n    {\n        "key": "tab",\n        "command": "-extension.vim_tab",\n        "when": "editorTextFocus && vim.active && !inDebugRepl && vim.mode != \'Insert\'"\n    },\n    {\n        "key": "shift+tab",\n        "command": "-extension.vim_shift+tab",\n        "when": "editorTextFocus && vim.active && !inDebugRepl && vim.mode != \'Insert\'"\n    },\n    {\n        "key": "alt+l",\n        "command": "workbench.action.nextEditor"\n    },\n    {\n        "key": "alt+h",\n        "command": "workbench.action.previousEditor"\n    },\n    {\n        "key": "alt+j",\n        "command": "editor.action.moveLinesDownAction"\n    },\n    {\n        "key": "alt+k",\n        "command": "editor.action.moveLinesUpAction"\n    },\n    {\n        "key": "alt+g",\n        "command": "workbench.action.closeActiveEditor"\n    },\n    {\n        "key": "alt+g",\n        "command": "workbench.action.closeActiveEditor"\n    },\n    {\n        "key": "f1",\n        "command": "editor.action.marker.next",\n        "when": "editorFocus"\n    },\n    {\n        "key": "alt+f1",\n        "command": "editor.action.marker.nextInFiles",\n        "when": "editorFocus"\n    },\n    {\n        "key": "alt+j",\n        "command": "editor.action.moveLinesDownAction",\n        "when": "editorTextFocus && !editorReadonly"\n    },\n    {\n        "key": "alt+k",\n        "command": "editor.action.moveLinesUpAction",\n        "when": "editorTextFocus && !editorReadonly"\n    },\n]\n\n')),(0,o.kt)("h2",{id:"settings-for-rider-settings-for-intellij-products"},"Settings for Rider, Settings for Intellij-products"),(0,o.kt)("h3",{id:"download"},"Download"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vincepr.github.io/md/rider_settings/dot.ideavimrc"},"https://vincepr.github.io/md/rider_settings/dot.ideavimrc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vincepr.github.io/md/rider_settings/settings.zip"},"https://vincepr.github.io/md/rider_settings/settings.zip"))),(0,o.kt)("h3",{id:"step-by-step"},"Step by Step"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For those who would want simple completion (no deletion) upon hitting tab - you need to change ",(0,o.kt)("inlineCode",{parentName:"p"},"Choose Lookup Item")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Choose Lookup Item and Replace")," in Settings | Keymap.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"disable auto new line on toggle comment - uncheck: AdvancedSettings/Move caret down after comment ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Appearance - New Ui - Compact Mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Editor - Color Scheme - Visual Studio Dark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Editor - Font - Consolas, size:14.0, Lineheight:0.9 (might have to set in Color-Scheme)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"right click tabs - Configure Editor Tabs "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SqueezeTabs"),(0,o.kt)("li",{parentName:"ul"},"disable show file-icon"),(0,o.kt)("li",{parentName:"ul"},"disable show file extension"),(0,o.kt)("li",{parentName:"ul"},"disable show close X"),(0,o.kt)("li",{parentName:"ul"},"open new tabs at the end"),(0,o.kt)("li",{parentName:"ul"},"OPENDING_POLICY - Enable preview tab"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"left of code:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"appearance - breadcrumbs - none"),(0,o.kt)("li",{parentName:"ul"},"appearance - configure-gutter-icons - disable"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"next some added keybindings for my preference:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'" https://gist.github.com/tuxfight3r/0dca25825d9f2608714b\n\n""" Custom Settings  ----------------------------------------\nlet mapleader = ","\n\n"set relativenumber\n"set number\nset visualbell\nset noerrorbells\nset scrolloff=10\n" default->ignorecase. if Upper->searchSensitive. searchQuicker. highlighSearch.\nset ignorecaseset smartcaseset incsearchset hlsearch\n\n""" Plugins -------------------------------------------------\n" ! manually install sneak extension from marketplace\nset sneak\n\n" https://raw.githubusercontent.com/wiki/JetBrains/ideavim/NERDTree-support.md\nPlug \'tpope/vim-surround\'\nset surround\n\n" https://github.com/tpope/vim-commentary/blob/master/doc/commentary.txt\nPlug \'tpope/vim-commentary\'\nset commentary\n\n" https://github.com/terryma/vim-multiple-cursors/blob/master/doc/multiple_cursors.txt\nPlug \'terryma/vim-multiple-cursors\'\nset multiple-cursors\n\nPlug \'machakann/vim-highlightedyank\'\nset highlightedyank\n\n\n""" ! manually rebind keybinding in rider   -------------------\n" map <C-d> <Action>(ActivateTerminalToolWindow)\n" map <C-\xe4> <Action>(CompleteCurrentStatement)\n" map <C-h> <Action>(Left)\n" map <C-j> <Action>(Down)\n" map <C-k> <Action>(Up)\n" map <C-l> <Action>(Right)\n" map <C-h> QuickJavaDoc - REBIND IN VIM DOESNT OPEN 2ndWINDOW - just overwrite all of ctrl+q\n" map f2 <Action>(Refactor-Rename)\n\n" map <A-1> <Action>(ToggleExplorer)\n" map <A-2> <Action>(ToggleCommit)\n" map <A-3> <Action>(PullRequest)\n" map <A-4> <Action>(UnitTests)\n" map <A-5> <Action>(ToggleGitHistory)\n\n""" set if ide or vim should handle keybinding:\nsethandler <C-.> a:vim\nsethandler <C-2> a:ide\nsethandler <C-6> a:ide\nsethandler <C-a> a:ide\nsethandler <C-b> a:vim\nsethandler <C-c> a:vim\nsethandler <C-d> a:vim\nsethandler <C-e> a:ide\nsethandler <C-f> a:ide\nsethandler <C-g> a:vim\nsethandler <C-h> a:ide\nsethandler <C-i> a:vim\nsethandler <C-j> a:ide\nsethandler <C-k> a:ide\nsethandler <C-l> a:ide\nsethandler <C-m> a:vim\nsethandler <C-n> i:vim\nsethandler <C-o> a:vim\nsethandler <C-p> i:vim\nsethandler <C-q> a:vim\nsethandler <C-r> a:vim\nsethandler <C-s> a:ide\nsethandler <C-t> a:ide\nsethandler <C-u> a:vim\nsethandler <C-v> a:ide\nsethandler <C-w> a:vim\nsethandler <C-x> a:ide\nsethandler <C-y> a:ide\nsethandler <C-z> a:ide\nsethandler <C-[> a:ide\nsethandler <C-]> a:ide\nsethandler <C-\\> a:ide\n\n""" One-Key-Bindings ----------------------------------------\n" the alt+enter with less movement\nmap <C-.> :action ShowIntentionActions<cr>\nimap <C-.> <Action>(ShowIntentionActions)\n\nmap <A-f> <Action>(FindNext)\nimap <A-f> <Action>(FindNext)\n\n" using idea history over vim (seems dodgy)\nmap <C-o> <Action>(Back)\nimap <C-o> <Action>(Back)\nmap <C-i> <Action>(Forward)\nimap <C-i> <Action>(Forward)\n\n" move lines up/down\nmap <A-j> <Action>(MoveLineDown)\nmap <A-k> <Action>(MoveLineUp)\nmap <Tab> <Action>(EditorIndentSelection)\nmap <S-Tab> <Action>(EditorUnindentSelection)\n\n" Tab homerow navigation\nmap <A-l> <Action>(NextTab)\nimap <A-l> <Action>(NextTab)\nmap <A-h> <Action>(PreviousTab)\nimap <A-h> <Action>(PreviousTab)\nmap <A-g> <Action>(CloseEditor)\nimap <A-g> <Action>(CloseEditor)\n\n" cycling autocomplete (might remove)\nimap <C-n> :action HippieCompletion<CR>\nimap <C-p> :action HippieBackwardCompletion<CR>\n\n" is this ever useful (might remove)\nmap <Leader>k <Action>(EditorCodeBlockStart)\nmap <Leader>j <Action>(EditorCodeBlockEnd)\n\n" toggle extra-panels with b\nmap <C-b> <Action>(HideAllWindows)\nimap <C-b> <Action>(HideAllWindows)\n\n" select between braces/statement really quickly\nmap <A-w> <Action>(EditorSelectWord)\nimap <A-w> <Action>(EditorSelectWord)\n\n"" copy behavior for vim/neovim\n"nnoremap <C-c> "+y<Esc>\n"vnoremap <C-c> "+y<Esc>\n"xnoremap <C-c> "+y<Esc>\n"snoremap <C-c> "+y<Esc>\n" copy behavior + exit mode for idea:\nmap <C-c> <Action>($Copy) <Action>(EditorEscape)\n\n""" Two-Key-Bindings ----------------------------------------\nnnoremap ge :action ShowErrorDescription<cr>\nnnoremap gE :action GotoPreviousError<cr>\nnnoremap gh :action QuickJavaDoc<cr>\nnnoremap gH :action QuickImplementations<cr>\nnnoremap gr :action Refactorings.QuickListPopupAction<cr>\nnnoremap gp :action ParameterInfo<cr>\n\nmap gb :action ToggleLineBreakpoint<cr>\nmap gi : action GotoImplementation<cr>\n\n" map g; <Action>(JumpToLastChange)\n" map g, <Action>(JumpToNextChange)\n\n\nmap gs <Action>(SelectIn)\nmap gk <Action>(Vcs.QuickListPopupAction)\n\nmap gw <Action>(EditorSelectWord)\n\nmap gf <Action>(ReformatCode)\nmap gF <Action>(ShowReformatFileDialog)\n\nmap gl <Action>(InsertLiveTemplate)\n\nmap <Leader>s <Action>(FileStructurePopup)\nmap <Leader>S <Action>(GotoRelated)\n\nmap <Leader>e <Action>(GotoNextError)\nmap <Leader>E <Action>(GotoPreviousError)\n\nmap <Leader>f <Action>(FindUsages)\nmap <Leader>F <Action>(HighlightUsagesInFile)\n\nmap <Leader>g <Action>(Generate)\nmap <Leader>G <Action>(GotoSymbol)\n\nmap <Leader>w <Action>(HideAllWindows)\nmap <Leader>W <Action>(JumpToLastWindow)\n\nmap <Leader>r <Action>(ChooseRunConfiguration)\nmap <Leader>R <Action>(Refactorings.QuickListPopupAction)\n\nmap <Leader>a <Action>(AnalyzeActionsPopup)\n\n" in case we need backspace: map <BS> <Action>(GotoRelated)\n')))}d.isMDXComponent=!0}}]);