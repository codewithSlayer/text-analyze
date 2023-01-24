import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import TextArea from './TextArea'
const Another = () => {

  const [theme,setTheme] = useState("secondary");

  const changeColor = ()=>{
    if(theme === "secondary"){
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    }
    else{
      setTheme("secondary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Navbar navProp={theme} />
      <div className="form-check form-switch ">
        <input className="form-check-input" style={{cursor: "pointer"}} onClick={changeColor} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" style={{cursor: "pointer"}} htmlFor="flexSwitchCheckDefault">Dark theme</label>
      </div>
      <TextArea textProp={theme}/>
    </>
  )
}

export default Another
