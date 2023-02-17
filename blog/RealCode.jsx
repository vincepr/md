import React, { useEffect } from 'react'
import {useState} from 'react'
import CodeBlock from '@theme/CodeBlock';
import CodeAnswers from "./CodeAnswers.jsx"


export default function RealCode({importPath, withHelp}){
    const [jsText, setJsText] = useState()
    const [answers, setAnswers] = useState([])

    // use effect so it only happens once and not every re-render
    useEffect(()=>{
        let ignore = false
        async function startFetching(){
            fetch(importPath)
                .then(response => response.text())
                .then((responseText) => {
                    let ob = runJsFile(responseText)
                    return {txt: ob.txt, answers: ob.answers}
                })
                .then((ob) => {
                    if(!ignore){
                        // if user didnt "leave" we set the new states
                        setJsText(ob.txt);
                        setAnswers(ob.answers);
                    }
                })
        }
        startFetching()
        return () => ignore = true;   // if user leaves site/goes-previous this callback will trigger -> setStates above will not execute
    }, [importPath])

    return <div>
        <MarkdownCodeBlock importPath={importPath} text={jsText}/>
        <CodeAnswers arr={answers} withHelp={withHelp}/>
    </div>
}


/** load the file and display the text */
function MarkdownCodeBlock({importPath, text}){
    return <CodeBlock
                language="jsx"
                title={importPath}
                showLineNumbers
            >{text || "loading js-file..."}
            </CodeBlock>
}

/** try running the file and returns Array with each of the console.log lines it produces */
function runJsFile(text){
    "use strict";
    let arrConsoleLogLines = []
    // "overload" console log for running the js file
    let console = {}
    console.log = (log) => {arrConsoleLogLines.push(log.toString())}
    // try executing the string with the new console.log() that writes into the array
    try{
        eval(text)
    }
    catch(error){
        return {txt: text+ '\n ! '+error.toString()+" !", answers: [] }
    }
    return {txt: text, answers: arrConsoleLogLines}
}