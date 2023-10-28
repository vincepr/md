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
- choose vim over IDE for the following keys:
```
// vim specific
ctrl c - vim    // we make this copy and esc in our .ideavim
ctrl d - vim    // move down a half page
ctrl i - vim    // next mouse cursor position
ctrl m - vim    // enables newline in insert mode
ctrl n - vim    // autocomplete next option
ctrl o - vim    // prev mouse cursor position
ctrl p - vim    // autocomplete prev option
ctrl q - vim    // box selection mode
ctrl r - vim    // undo changes gone back with u
ctrl s - vim    // vim sneak
ctrl u - vim    // move up a half page
ctrl [ - vim    // move quickly
ctrl ] - vim    // move quickly

rest use IDE
```

- next some added keybindings for my preference:
```
// non default Keybindings(us keyboard layout)
ctrl+\		Tool Windows/Terminal (English only)
ctrl+ö      Tool Windows/Terminal (german only)
ctrl+#      (GERMAN-ONLY) toggle comment


ctrl+shift+e    RecentLocation->FileExplorer
ctrl+alt+f      RecentLocatoin
ctrl+shift+g    Git/VCS Group/VCS Operations Popup
ctrl+b          MainMenu/Window/ActiveToolwindow/HideAllToolWindows

f1		Main Menu/Navigate/Goto Error/Bookmark Actions/Next Highlighted Error
f2		rename
			MainMenu/Refactor/Rename
			Version Control Systems/Shelve/Rename
			Version Control Systems/Shelve/Edit Changelist
			Datbase Explorer/Rename
			Datbase Explorer/Sessions/Rename Session
			Git/EditCommitMessage
			Other/Bookmaks/Edit
			Other/TableActions/EditTableCell
			Other/TreeActions/EditTreeNode

ctrl+alt+e	rebind what ctrl+e did before
ctrl+e		Navigate/Goto by Name Actions/Go to File
ctrl+alt+1	rebind alt+1
ctrl+alt+2	rebind alt+2
ctrl+alt+3	rebind alt+3
ctrl+alt+4	rebind alt+4
ctrl+alt+5	rebind alt+5

alt+Enter   -> ALSO ctrl+.          // like in vscode
ctrl+shift+enter -> also ctrl+,     // want this quick complete easy to reach

alt+1		Other/Tabs/select tab #1
...
alt+5		Other/Tabs/select tab #5
```

- create an `C\Users\vincepr\.ideavimrc`
```
set sneak

set visualbell
set noerrorbells

nnoremap ge :action ShowErrorDescription<cr>
nnoremap gh :action QuickJavaDoc<cr>
nnoremap gf :action QuickImplementations<cr>

nnoremap <C-c> "+y<Esc>
vnoremap <C-c> "+y<Esc>
xnoremap <C-c> "+y<Esc>
snoremap <C-c> "+y<Esc>

remap <C-n> <Action>(GotoClass)
```

