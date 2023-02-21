import React from 'react'
import {useState} from 'react'
import CodeBlock from '@theme/CodeBlock';
import CodeAnswers from './CodeAnswers';

/**
 * returns a Playground Element, optional with a unit-Testing .js import for "Js-Hero"-like interactive Elements
 * @param {*} importPath ->optional import Path -> with a unitTestFile otherwise run in Playground-Mode
 */
export default function JsPlayground({importPath}){
    let isWithImport = false            // playground-mode
    if(importPath) isWithImport = true  // import file to run "unit-test-with"

    const [textArea,setTextArea] = useState(``)
    const [answers, setAnswers] = useState([])
    const [errorMsg, setErrorMsg] = useState ("false")

    let answersStr = ""
    if (errorMsg !== "false") answersStr = "❌ "+errorMsg         // display error message
    else answers.forEach(line => answersStr += line + "\n") // display console.log() output with newlines inbetween
    
    // event handling:
    const handleTextChange = (event) => setTextArea(event.target.value)
    /** runs code in textInput after the importFile if that exists or just in playgroundmode without */
    const runCode = () => {

        if(isWithImport){
            fetch(importPath)
            .then((el) => el.text())
            .then(unitTest => {
                // run after importing File
                let ranJs = runJs(textArea+"\n"+unitTest)
                setAnswers(ranJs.arr)
                setErrorMsg(""+ranJs.error)
            })
        }
        else{
            // run without importFile in Playgroundmode
            console.log("notImportMmode")
            let ranJs = runJs(textArea)
            setAnswers(ranJs.arr)
            setErrorMsg(""+ranJs.error)
        }
    }

    return(<>
        <textarea
            style={{width: "100%"}}
            onChange={handleTextChange}
            value={textArea}
            spellCheck="false"
            placeholder={`// input your js here\nconsole.log("the world is your oyster")`}
            rows="25"/>
        <p></p>
        <button
            style={{float: "right"}}
            onClick={runCode}
        >Run Code</button>
        <ConsoleLogBlock title={"console.log"} text={answersStr}/>
        <p></p>
        <ToggleableAnswers text={textArea} answers={answers}/>
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


function ToggleableAnswers({text, answers}){
    const [isVisible, setIsVisible] = useState(false)
    const handleclickToggle = (event) => setIsVisible(!isVisible)
    const handleClickDownload = (event) => download(text)

    return(<>
        <button
            style={{margimRight:"10px"}}
            onClick={handleclickToggle}
        >Toggle</button>
        <button
            onClick={handleClickDownload}
        >Save file</button>
        {isVisible && <div>
            <CodeBlock
            isVisible={isVisible.toString()}
            language="jsx"
            showLineNumbers>
                {text || "---"}
            </CodeBlock>
            {(answers) && <CodeAnswers arr={answers} withHelp={true}/>}
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
}

