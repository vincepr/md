# Settings for Vscode

## global settings.json
openvscode-server location for the global settings: `~/.vscode-remote/data/Machine/settings.json`

`settings.json`
```json
{
	"files.autoSave": "afterDelay",
    "files.simpleDialog.enable": true,
    "explorer.confirmDragAndDrop": false,
    "thunder-client.defaultUrl": "http://127.0.0.1:3000/account",
    "git.autofetch": true,
    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "workbench.colorTheme": "Default High Contrast"
}
```

`keybindings.json`
```json
// Place your key bindings in this file to override the defaults
[
    { "key": "ctrl+c",              "command": "workbench.action.terminal.copySelection", "when": "terminalFocus && terminalTextSelected" },
    { "key": "ctrl+[Semicolon]",    "command": "workbench.action.terminal.toggleTerminal"},
    { "key": "ctrl+v",              "command": "workbench.action.terminal.paste", "when": "terminalFocus" },
    { "key": "ctrl+[Backslash]",    "command": "editor.action.commentLine","when": "editorFocus"},
    {"key": "alt+[Equal]",   "command": "type","args": {"text":"```"},"when": "editorTextFocus && !editorReadonly"},
]
```

