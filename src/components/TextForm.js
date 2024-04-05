import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    
    function TitleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');

    }
    
    
    
    function handleLowClick() {

        let newtext = text.toLowerCase();

        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleSenClick = ()=>{
        
        let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newtext)
        props.showAlert("Converted to sentence case","success");
    }
    const handleTitleClick = ()=>{
        
        let newtext = TitleCase(text);
        setText(newtext)
        props.showAlert("Converted to Titlecase","success");
    }
    const handleClClick = ()=>{
        
        let newtext = "";
        setText(newtext)
        props.showAlert("Text Cleared...!!","success");
    }
    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");
    }
    const handleSpaces= ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces are removed","success");
      }
    const[text,setText] = useState("");
    return (
        <>
            <div className='container my-3' style = {{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
            <div className="mb-3">
                
                <textarea className="form-control" value = {text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleSenClick}>Convert to SentenceCase</button>
            <button className='btn btn-primary mx-2' onClick={handleTitleClick}>Convert to TitleCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClClick}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container  my-3 " style = {{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>
                    Your Text Summary
                </h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>
                    {text.length>0?text:"Enter something in the above textbox to preview it here..!!"}
                </p>
            </div>
        </>
    )
}
