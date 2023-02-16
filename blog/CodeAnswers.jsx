import React from 'react';
import { useState } from 'react';
import './CodeAnswers.css'


export default function CodeAnswers({arr, withHelp}) {

  const [nth, setNth] = useState(0);
  const [inputField, setInputField] = useState("")

  function inputChanged(event){
    setInputField(event.target.value)
  }
  function submitOneLine(){
    if(inputField===arr[nth]){
      setNth(nth+1)
      setInputField("")
    }
  }
  function clickedHelp(){
    setNth(arr.length)
  }
  return (
    <div>
      <ol className='CodeAnswersList'>
        {
          arr
            .filter( (el,idx) => alreadyEntered(el,idx,nth) )
            .map( (el,idx) => createList(el,idx, nth===arr.length))
        }
      </ol>
      <input className='CodeAnswersInput' value={inputField} onChange={inputChanged} onKeyDown={ev=>{if(ev.key ==="Enter")submitOneLine()}}></input>
      <button className='CodeAnswersButton' onClick={submitOneLine}>Check one Line</button>
      {withHelp ? <button onClick={()=>{if(nth<arr.length)setNth(nth+1)}}>Help - reveal one line</button> : ""}
      {withHelp ? <button style={{marginLeft: '1%'}} onClick={clickedHelp}>Help - show all</button> : ""}
    </div>
  );
}

function createList(el, idx, isAllCorrect){

  return (
    <li
      className={isAllCorrect ? "typed-out finished" : "typed-out"}
      key={idx}
    > {el} </li>
  )
}
function alreadyEntered(element, index, nth){
  return index<nth
}