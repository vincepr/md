import React from "react"

// https://erikmartinjordan.com/react-textarea-indent 

export default function TextArea({handleTextChange, text}){
    const tabIsSpaces = 4

    function handleKeyPress(ev){
        let content = ev.target.value
        let caret   = ev.target.selectionStart

        if(ev.key = "Tab"){
            ev.preventDefault()
            let newText = content.substring(0, caret) + " ".repeat()
        }
    }


    return <textarea
                style=      {{width: "100%"}}
                onChange=   {handleTextChange}
                onKeyDown=  {handleKeyPress}
                value=      {text}
                spellCheck="false"
                placeholder={`// input your js here\nconsole.log("the world is your oyster")`}
                rows="25"
            />
}