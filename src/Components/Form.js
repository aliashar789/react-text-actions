import React, { useState } from 'react'

export default function Form(props) {
    
const handleUpClick = ()=>{
    // console.log("uppercase clicked " + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To UpperCase", "success")
    
}
const handleLoClick = ()=>{
  // console.log("uppercase clicked " + text);
  let newText= text.toLowerCase();
  setText(newText)
  props.showAlert("Converted To LowerCase", "success")
}
const handleClearClick = ()=>{
  // console.log("uppercase clicked " + text);
  let newText= '';
  setText(newText)
  props.showAlert("Box Cleared", "success")
}


const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
}

const handleCopy= () =>{
  var text= document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copied", "success")
}

const handleExtraSpaces= ()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "))
}

    const [text, setText] = useState('');

// setText=("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <div className="mb-3">
  <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
  <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'#644862':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
<button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
<button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Box</button>
<button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters
      </p>
      <p>You Can Read These Words In  {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues </p>
      <h2>Review</h2>
      <p>{text.length>0?text:"Enter Something In The TextBox To Review Here"}</p>
    </div>
    </>
  )
}
