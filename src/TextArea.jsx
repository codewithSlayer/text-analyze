import React from 'react'
import { useState } from 'react'

const TextArea = (props) => {

  const [display,setDisplay] = useState("");
  // const [one,setOne] = useState("");
  const displayItems = (event)=>{
    setDisplay(event.target.value);
  }

  
  const size = display.length;

  const words = display.split(" ").filter((element)=>{return element.length!== 0}).length ;

  const upperCase = () =>{
    setDisplay(display.toUpperCase());
  }
  const lowerCase = () =>{
    setDisplay(display.toLowerCase());
  }

  const copied = () =>{
    let copy = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(copy.value);
  }

  const cleared = () =>{
    setDisplay(" ");
  }

  const sorting = () =>{
    setDisplay(display.Sort());
  }

  const removeSpaces = () =>{
      let text = display.split(/[ ]+/);
      setDisplay(text.join(" "));
  }

  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text below to analyze</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={display} style={{backgroundColor: props.textProp === "secondary"? "white" : "#6c757d", color : props.textProp === "secondary" ? "black" : "white" }} onChange={displayItems} rows="7"/>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={upperCase} >To upperCase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={lowerCase}>To lowerCase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={sorting}>Sort</button>
        <button className="btn btn-primary mx-2 my-3" onClick={removeSpaces}>Remove spaces</button>
        <button className="btn btn-primary mx-2 my-3" onClick={cleared}>Clear</button>
        <button className="btn btn-primary mx-2 my-3" onClick={copied}>Copy text</button>
        <p className='my-5'>{(words === 0 && size === 0 ) ? "" : `This paragraph has ${size} letter and ${words} words`}</p>
      </div>
    </>
  )
}

export default TextArea
