import React, {useEffect, useState} from "react"

// https://erikmartinjordan.com/react-textarea-indent 

export default function TextArea({setText, text}){
    const [caret, setCaret] = useState(-1)
    const [target, setTarget] = useState(null)

    useEffect(() => {
        // with the caret=-1 in handleChange() follows, this only updates the caret when after the inserted "\t" or "\n\t\t..." 
        if(caret >= 0){
            target.setSelectionRange(caret + 1, caret + 1);
        }
    }, [target, caret])

    const handleKeypress = (event) => {
        if (event.ctrlKey || event.altKey) return 
        if(event.key === 'Tab'){
            let content  = event.target.value
            let caretPos = event.target.selectionStart
            event.preventDefault();
            let newText  = content.substring(0, caretPos) + "\t" + content.substring(caretPos)
            setText(newText)
            setCaret(caretPos)
            setTarget(event.target)
        } else if (event.key === "Enter"){
            // DAS IST ALLES NUR GEKLAUT EEH OHHH
            let content         = event.target.value
            let original_start  = event.target.selectionStart
            let selection_start = original_start
            let selection_end   = event.target.selectionEnd
            let selection       = selection_start != selection_end
            if (!selection){
                // Find start of the current line.
                while ((selection_start > 0) && (text[selection_start-1] != '\n'))
                    { selection_start--; }
                let line_start = selection_start;
                // Find first non-whitespace character.
                while ((text[selection_start] == ' ') || (text[selection_start] == '\t'))
                    { selection_start++; }
                // If those two aren't the same, insert whitespace to auto-indent.
                if (selection_start != line_start){
                    event.preventDefault();
                    // Insert newline and indented text.
                    let insert = '\n' + text.substr(line_start, Math.min(original_start, selection_start) - line_start)
                    let newText = content.substring(0, original_start) + insert + content.substring(original_start)
                    setText(newText)
                    setCaret(original_start+(insert.length-1))
                    setTarget(event.target)
                }
            }
        }
    }
    const handleChange = (e) =>{
        setText(e.target.value)
        setCaret(-1)
        setTarget(e.target)
    }


    return <textarea
                style=      {{width: "100%"}}
                onChange=   {handleChange}
                onKeyDown=  {handleKeypress}
                value=      {text}
                spellCheck="false"
                placeholder={`// input your js here\nconsole.log("the world is your oyster")`}
                rows="25"
            />
}