import React, { useState } from 'react';



function TextForm(props){
    const [text,setText]=useState('');

    function clickHandler(){
        // console.log('upper btn was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    function clickLowHandler(){
        let newText=text.toLowerCase();
        setText(newText);
    }
    function resetHandler(){
        let newText=" ";
        setText(newText);
    }

    function handleOnChange(event){
        // console.log('on changed')
        setText(event.target.value)
    }
    
    
    return(
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea type="text" value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"/>
    
    
  </div>
  <button className="btn btn-primary mx-1" onClick={clickHandler}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={clickLowHandler}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={resetHandler}>Reset</button>
  
</div>

<div className="container">
    <h2>Your content summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
    )
}


export default TextForm;


