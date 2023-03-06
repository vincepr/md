import React from 'react'
import {useState} from 'react'
import CodeBlock from '@theme/CodeBlock';
import AnswerGame from './AnswerGame';
import TextArea from './TextArea';


/**
 * returns a Playground Element, optional with a unit-Testing-mode .js import for "Js-Hero"-like interactive Elements
 * @param {*} importPath? optional import Path. linking a unitTestFile otherwise runs in Playground-Mode
 * @param {*} defaultText? optional string if you want to initialize the element with some default-text
 */
export default function JsPlayground({importPath, defaultText}){
    let isWithImport = false            // playground-mode
    if(importPath) isWithImport = true  // import file to run "unit-test-with"
    
    const [text,setText] = useState(defaultText ? String(defaultText) : "")     // if there is an defaultText we use it at the start ""
    const [answers, setAnswers] = useState([])
    const [errorMsg, setErrorMsg] = useState ("false")

    let answersStr = ""
    if (errorMsg !== "false") answersStr = "❌ "+errorMsg         // display error message
    else answers.forEach(line => answersStr += line + "\n") // display console.log() output with newlines inbetween
    
    /** runs code in textInput after the importFile if that exists or just in playgroundmode without */
    const onClickRunCode = () => {

        if(isWithImport){
            fetch(importPath)
            .then((el) => el.text())
            .then(unitTest => {
                // run after importing File
                let ranJs = runJs(text+"\n"+unitTest)
                setAnswers(ranJs.arr)
                setErrorMsg(""+ranJs.error)
            })
        }
        else{
            // run without importFile in Playgroundmode
            let ranJs = runJs(text)
            setAnswers(ranJs.arr)
            setErrorMsg(""+ranJs.error)
        }
    }

    return(<>

        <TextArea
            setText={setText}
            text={text}
        />
        
        <p></p>
        <button
            style={{float: "right"}}
            onClick={onClickRunCode}
        >Run Code</button>
        <ConsoleLogBlock title={"console.log"} text={answersStr}/>
        <p></p>
        <ToggleableAnswers text={text} answers={answers} setText={setText}/>
    </>
    )
}


/** load the file and display the text */
function ConsoleLogBlock({title, text}){
    return <CodeBlock
                title={title}
                showLineNumbers
            >{text || "---press run to see if your code works---"}
            </CodeBlock>
}


/** try running the file and returns Array with each of the console.log lines it produces */
function runJs(text){
    "use strict";
    let arrConsoleLogLines = []
    // "overload" console log for running the js file
    let console = {}
    console.log = (log) => {arrConsoleLogLines.push(log.toString())}
    // try executing the string with the new console.log() that writes into the array
    try{
        eval(text)
    }
    catch(err){
        return {error: err, arr: [] }
    }
    return {error: false, arr: arrConsoleLogLines}
}


function ToggleableAnswers({text, answers, setText}){
    const [isVisible, setIsVisible] = useState(false)
    const handleclickToggle = (event) => setIsVisible(!isVisible)
    const handleClickDownload = (event) => download(text)

    return(<>
        <button
            style={{marginRight:"10px"}}
            onClick={handleclickToggle}
        >Toggle</button>

        <button
            style={{marginRight:"10px"}}
            onClick={handleClickDownload}
        >Save file</button>

        <input
            type="file"
            accept=".js, .txt, .jsx"
            onChange={onChange}
        ></input>

        {isVisible && <div>
            <CodeBlock
            isVisible={isVisible.toString()}
            language="jsx"
            showLineNumbers>
                {text || "---"}
            </CodeBlock>
            {(answers) && <AnswerGame arr={answers} withHelp={true}/>}
        </div>}
        
    </>
    )

    function download(text) {
        let filename = "Aufgabe.js"
        let element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
        element.setAttribute('download', filename)
        
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    function onChange(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
          let newText = event.target.result
          setText(newText)
        };
      
        reader.readAsText(file);
    }
}

