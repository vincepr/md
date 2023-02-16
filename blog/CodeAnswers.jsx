import React from 'react';
import { useState } from 'react';
import './CodeAnswers.css'


export default function CodeAnswers({arr, withHelp}) {

  const [nth, setNth] = useState(0);
  const [inputField, setInputField] = useState("")

  const inputChanged = (event)=> setInputField(event.target.value)
  const clickedHelp = ()=> setNth(arr.length)
  function submitOneLine(){
    if(inputField===arr[nth]){
      setNth(nth+1)
      setInputField("")
    }
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
      <input className='CodeAnswersInput'
        disabled = {(nth===arr.length)? "disabled" : ""}
        onKeyDown={ev=>{if(ev.key ==="Enter")submitOneLine()}}
        onChange={inputChanged} 
        value={inputField} 
        ></input>

      <button 
        disabled = {(nth===arr.length)? "disabled" : ""}
        onClick={submitOneLine}
        className='CodeAnswersButton' 
      >Check one Line</button>
      
      {withHelp ? 
        <button
          disabled = {(nth===arr.length)? "disabled" : ""} 
          onClick={()=>{if(nth<arr.length)setNth(nth+1)}}
        >Help - one line</button> : ""}

      {withHelp ? 
        <button
          disabled = {(nth===arr.length)? "disabled" : ""} 
          onClick={clickedHelp}
          style={{marginLeft: '1%'}} 
        >Help - show all</button> : ""}
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