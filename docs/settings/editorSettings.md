# editor Settings
## Settings for Vscode

openvscode-server location for the global settings: `~/.vscode-remote/data/Machine/settings.json`

`settings.json`
```json
{
    "thunder-client.defaultUrl": "http://127.0.0.1:5555/",
    /// base settings
    "workbench.colorTheme": "Default Dark Modern",
    // "files.autoSave": "afterDelay",  // enable this if hotreloading is killing performance for remote work
    "files.simpleDialog.enable": true,
    // "terminal.integrated.allowChords": false,
    // "window.commandCenter": false,
    /// git settings
    "git.enableSmartCommit": true,
    "git.autofetch": true,
    /// vim settings
    "vim.highlightedyank.enable": true,
    "vim.highlightedyank.duration": 1000,
    "vim.sneak": true,
    "vim.handleKeys": {
        "<C-x>": false,
        "<C-v>": false,
        "<C-a>": false,
        "<C-f>": false,
        "<C-e>": false,
        "<C-y>": false,
        "<C-z>": false, 
        "<C-b>": false,
    },
    "editor.emptySelectionClipboard": false,    // stop copy empty line on ctrl+c exit input mode
    "vim.insertModeKeyBindings": [
        {
            "before": ["<C-c>"],
            "commands": ["editor.action.clipboardCopyAction", "extension.vim_escape"]
        }
    ],
    "editor.codeLens": false,
}
```
- ctrl shift P and `open keyboard shortcuts (json)`

```json
// Place your key bindings in this file to override the defaults
[
    {
        "key": "tab",
        "command": "-extension.vim_tab",
        "when": "editorTextFocus && vim.active && !inDebugRepl && vim.mode != 'Insert'"
    },
    {
        "key": "shift+tab",
        "command": "-extension.vim_shift+tab",
        "when": "editorTextFocus && vim.active && !inDebugRepl && vim.mode != 'Insert'"
    }
]
´´´

```

## Settings for Rider, Settings for Intellij-products
- disable auto new line on toggle comment - uncheck: AdvancedSettings/Move caret down after comment 
- next some added keybindings for my preference:
```
// non default Keybindings(us keyboard layout)
ctrl+ö      Tool Windows/Terminal (german only)
ctrl+#      (GERMAN-ONLY) toggle comment
ctrl+shift+enter ->   also ctrl+ä     // want this quick complete easy to reach

shift+f6         ->   f2		rename
f1                  -> next error

ctrl+h left
ctrl+j down
ctrl+k up
ctrl+l right
```

- create an `C\Users\vincepr\.ideavimrc`
```
"set relativenumber
"set number
set visualbell
set noerrorbells


Plug 'tpope/vim-surround'
set surround

Plug 'tpope/vim-commentary'
set commentary

" manually install sneak extension from marketplace
set sneak

Plug 'terryma/vim-multiple-cursors'
set multiple-cursors

" manually rebind keybinding in rider:
" map <C-d> <Action>(ActivateTerminalToolWindow)
" map <C-ä> <Action>(CompleteCurrentStatement)
" map <C-h> <Action>(Left)
" map <C-j> <Action>(Down)
" map <C-k> <Action>(Up)
" map <C-l> <Action>(Right)
" map <C-h> QuickJavaDoc - REBIND IN VIM DOESNT OPEN 2ndWINDOW - just overwrite all of ctrl+q
" map f2 <Action>(Refactor-Rename)

sethandler <C-.> a:vim
sethandler <C-2> a:ide
sethandler <C-6> a:ide
sethandler <C-a> a:ide
sethandler <C-b> a:vim
sethandler <C-c> a:vim
sethandler <C-d> a:vim
sethandler <C-e> a:ide
sethandler <C-f> a:ide
sethandler <C-g> a:vim
sethandler <C-h> a:ide
sethandler <C-i> a:vim
sethandler <C-j> a:ide
sethandler <C-k> a:ide
sethandler <C-l> a:ide
sethandler <C-m> a:vim
sethandler <C-n> i:vim
sethandler <C-o> a:vim
sethandler <C-p> i:vim
sethandler <C-q> a:vim
sethandler <C-r> a:vim
sethandler <C-s> a:vim
sethandler <C-t> a:ide
sethandler <C-u> a:vim
sethandler <C-v> a:ide
sethandler <C-w> a:vim
sethandler <C-x> a:ide
sethandler <C-y> a:ide
sethandler <C-z> a:ide
sethandler <C-[> a:ide
sethandler <C-]> a:ide
sethandler <C-\> a:ide

map <C-.> :action ShowIntentionActions<cr>

" using idea history over vim (seems dodgy)
map <C-o> <Action>(Back)
map <C-i> <Action>(Forward)

" Tab homerow navigation
map <A-l> <Action>(NextTab)
map <A-h> <Action>(PreviousTab)
map <A-g> <Action>(CloseEditor)

" cycling autocomplete (might remove)
imap <C-n> <ESC>:action HippieCompletion<CR>a
imap <C-p> <ESC>:action HippieBackwardCompletion<CR>a

" is this ever useful (might remove)
map <Leader>k <Action>(EditorCodeBlockStart)
map <Leader>j <Action>(EditorCodeBlockEnd)

" want vim-window-splitting but replace old ctrl-q, ctrl-b is available with gd
map <A-w> <Action>(EditorSelectWord)
map <C-b> <Action>(HideAllWindows)

" copy behavior + exit mode
nnoremap <C-c> "+y<Esc>
vnoremap <C-c> "+y<Esc>
xnoremap <C-c> "+y<Esc>
snoremap <C-c> "+y<Esc>

nnoremap ge :action ShowErrorDescription<cr>
nnoremap gE :action GotoPreviousError<cr>
nnoremap gh :action QuickJavaDoc<cr>
nnoremap gH :action QuickImplementations<cr>
nnoremap gr :action Refactorings.QuickListPopupAction<cr>

" map g; <Action>(JumpToLastChange)
" map g, <Action>(JumpToNextChange)

let mapleader = ","

map gs <Action>(SelectIn)
map gk <Action>(Vcs.QuickListPopupAction)

map <Leader>s <Action>(FileStructurePopup)
map <Leader>S <Action>(GotoRelated)

map <Leader>e <Action>(GotoNextError)
map <Leader>E <Action>(GotoPreviousError)

map <Leader>f <Action>(FindUsages)
map <Leader>F <Action>(HighlightUsagesInFile)

map <Leader>g <Action>(Generate)
map <Leader>G <Action>(GotoSymbol)

map <Leader>w <Action>(HideAllWindows)
map <Leader>W <Action>(JumpToLastWindow)

map <Leader>r <Action>(ChooseRunConfiguration)
map <Leader>R <Action>(Refactorings.QuickListPopupAction)

map <Leader>a <Action>(AnalyzeActionsPopup)

" map <BS> <Action>(GotoRelated)
```

