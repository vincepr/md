# editor Settings
## Settings for Vscode

openvscode-server location for the global settings: `~/.vscode-remote/data/Machine/settings.json`

`settings.json`
```json
{
    "thunder-client.defaultUrl": "http://127.0.0.1:5555/",
    /// base settings
    "workbench.colorTheme": "Default Dark Modern",
    "files.autoSave": "afterDelay",  // enable this if hotreloading is killing performance for remote work
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
    "vim.visualModeKeyBindings": [
        {
            "before": ["<C-c>"],
            "commands": ["editor.action.clipboardCopyAction", "extension.vim_escape"]
        }
    ],
    "vim.normalModeKeyBindings": [
        {
            "before": ["<C-c>"],
            "commands": ["editor.action.clipboardCopyAction", "extension.vim_escape"]
        }
    ],
    "editor.codeLens": false,
    "security.allowedUNCHosts": [
        "wsl.localhost"
    ],
    "terminal.integrated.allowedLinkSchemes": [
        "file",
        "http",
        "https",
        "mailto",
        "vscode",
        "vscode-insiders",
        "ms-settings"
    ],
}
```
- ctrl shift P and `open keyboard shortcuts (json)`

```json
// Place your key bindings in this file to override the defaultsauto[]
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
    },
    {
        "key": "ctrl+j",
        "command": "list.focusDown",
    },
    {
        "key": "ctrl+k",
        "command": "list.focusUp",
    },
    {
        "key": "alt+l",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "alt+h",
        "command": "workbench.action.previousEditor"
    },
    {
        "key": "alt+j",
        "command": "editor.action.moveLinesDownAction"
    },
    {
        "key": "alt+k",
        "command": "editor.action.moveLinesUpAction"
    },
    {
        "key": "alt+g",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "alt+g",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "f1",
        "command": "editor.action.marker.next",
        "when": "editorFocus"
    },
    {
        "key": "alt+f1",
        "command": "editor.action.marker.nextInFiles",
        "when": "editorFocus"
    },
    {
        "key": "alt+j",
        "command": "editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+k",
        "command": "editor.action.moveLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
]
```

## Settings for Rider, Settings for Intellij-products
### Download

* https://vincepr.github.io/md/rider_settings/dot.ideavimrc
* https://vincepr.github.io/md/rider_settings/settings.zip


### Step by Step

- For those who would want simple completion (no deletion) upon hitting tab - you need to change `Choose Lookup Item` and `Choose Lookup Item and Replace` in Settings | Keymap.
- disable auto new line on toggle comment - uncheck: AdvancedSettings/Move caret down after comment 
- Appearance - New Ui - Compact Mode
- Editor - Color Scheme - Visual Studio Dark
- Editor - Font - Consolas, size:14.0, Lineheight:0.9 (might have to set in Color-Scheme)
- right click tabs - Configure Editor Tabs 
    - SqueezeTabs
    - disable show file-icon
    - disable show file extension
    - disable show close X
    - open new tabs at the end
    - OPENDING_POLICY - Enable preview tab

- left of code:
    - appearance - breadcrumbs - none
    - appearance - configure-gutter-icons - disable

- next some added keybindings for my preference:

```
" https://gist.github.com/tuxfight3r/0dca25825d9f2608714b

""" Custom Settings  ----------------------------------------
let mapleader = ","

"set relativenumber
"set number
set visualbell
set noerrorbells
set scrolloff=10
" default->ignorecase. if Upper->searchSensitive. searchQuicker. highlighSearch.
set ignorecaseset smartcaseset incsearchset hlsearch

""" Plugins -------------------------------------------------
" ! manually install sneak extension from marketplace
set sneak

" https://raw.githubusercontent.com/wiki/JetBrains/ideavim/NERDTree-support.md
Plug 'tpope/vim-surround'
set surround

" https://github.com/tpope/vim-commentary/blob/master/doc/commentary.txt
Plug 'tpope/vim-commentary'
set commentary

" https://github.com/terryma/vim-multiple-cursors/blob/master/doc/multiple_cursors.txt
Plug 'terryma/vim-multiple-cursors'
set multiple-cursors

Plug 'machakann/vim-highlightedyank'
set highlightedyank


""" ! manually rebind keybinding in rider   -------------------
" map <C-d> <Action>(ActivateTerminalToolWindow)
" map <C-ä> <Action>(CompleteCurrentStatement)
" map <C-h> <Action>(Left)
" map <C-j> <Action>(Down)
" map <C-k> <Action>(Up)
" map <C-l> <Action>(Right)
" map <C-h> QuickJavaDoc - REBIND IN VIM DOESNT OPEN 2ndWINDOW - just overwrite all of ctrl+q
" map f2 <Action>(Refactor-Rename)

" map <A-1> <Action>(ToggleExplorer)
" map <A-2> <Action>(ToggleCommit)
" map <A-3> <Action>(PullRequest)
" map <A-4> <Action>(UnitTests)
" map <A-5> <Action>(ToggleGitHistory)

""" set if ide or vim should handle keybinding:
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
sethandler <C-s> a:ide
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

""" One-Key-Bindings ----------------------------------------
" the alt+enter with less movement
map <C-.> :action ShowIntentionActions<cr>
imap <C-.> <Action>(ShowIntentionActions)

map <A-f> <Action>(FindNext)
imap <A-f> <Action>(FindNext)

" using idea history over vim (seems dodgy)
map <C-o> <Action>(Back)
imap <C-o> <Action>(Back)
map <C-i> <Action>(Forward)
imap <C-i> <Action>(Forward)

" move lines up/down
map <A-j> <Action>(MoveLineDown)
map <A-k> <Action>(MoveLineUp)
map <Tab> <Action>(EditorIndentSelection)
map <S-Tab> <Action>(EditorUnindentSelection)

" Tab homerow navigation
map <A-l> <Action>(NextTab)
imap <A-l> <Action>(NextTab)
map <A-h> <Action>(PreviousTab)
imap <A-h> <Action>(PreviousTab)
map <A-g> <Action>(CloseEditor)
imap <A-g> <Action>(CloseEditor)

" cycling autocomplete (might remove)
imap <C-n> :action HippieCompletion<CR>
imap <C-p> :action HippieBackwardCompletion<CR>

" is this ever useful (might remove)
map <Leader>k <Action>(EditorCodeBlockStart)
map <Leader>j <Action>(EditorCodeBlockEnd)

" toggle extra-panels with b
map <C-b> <Action>(HideAllWindows)
imap <C-b> <Action>(HideAllWindows)

" select between braces/statement really quickly
map <A-w> <Action>(EditorSelectWord)
imap <A-w> <Action>(EditorSelectWord)

"" copy behavior for vim/neovim
"nnoremap <C-c> "+y<Esc>
"vnoremap <C-c> "+y<Esc>
"xnoremap <C-c> "+y<Esc>
"snoremap <C-c> "+y<Esc>
" copy behavior + exit mode for idea:
map <C-c> <Action>($Copy) <Action>(EditorEscape)

""" Two-Key-Bindings ----------------------------------------
nnoremap ge :action ShowErrorDescription<cr>
nnoremap gE :action GotoPreviousError<cr>
nnoremap gh :action QuickJavaDoc<cr>
nnoremap gH :action QuickImplementations<cr>
nnoremap gr :action Refactorings.QuickListPopupAction<cr>
nnoremap gp :action ParameterInfo<cr>

map gb :action ToggleLineBreakpoint<cr>
map gi : action GotoImplementation<cr>

" map g; <Action>(JumpToLastChange)
" map g, <Action>(JumpToNextChange)


map gs <Action>(SelectIn)
map gk <Action>(Vcs.QuickListPopupAction)

map gw <Action>(EditorSelectWord)

map gf <Action>(ReformatCode)
map gF <Action>(ShowReformatFileDialog)

map gl <Action>(InsertLiveTemplate)

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

" in case we need backspace: map <BS> <Action>(GotoRelated)
```

