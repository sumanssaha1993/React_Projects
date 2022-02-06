import React, {useState} from 'react'

export default function TextForm(prop) {

  const [text, setText] = useState("");
  const [originaltext, addToOriginalText] = useState("");
  const [isFlagModified, modifyFlag] = useState(false);


  const checkCachedText = () => {
    if(!isFlagModified){
      modifyFlag(true);
      addToOriginalText(text);
    }
  }

  const convertToUpperCase = () => {
    if(text.length === 0){
      prop.showAlert('Please add some text and try', 'warning')
    }
    else{
      checkCachedText();
      setText(text.toUpperCase())
      prop.showAlert('Converted to uppercase', 'success')
    }
  }

  const convertToLowerCase = () => {
    if(text.length === 0){
      prop.showAlert('Please add some text and try', 'warning')
    }
    else{
      checkCachedText();
      setText(text.toLowerCase())
      prop.showAlert('Converted to lowercase', 'success')
    }
  }

  const clearText = () => {
    if(text.length === 0){
      prop.showAlert('No text to clear', 'warning')
    }
    else{
      checkCachedText();
      setText('')
      prop.showAlert('Text has been cleared', 'success')
    }
  }

  const handleCopy = () => {
    if(text.length === 0){
      prop.showAlert('No text to copy', 'warning')
    }
    else{
      let copiedText = document.getElementById('myBox');
      copiedText.select();
      navigator.clipboard.writeText(copiedText.value);
      prop.showAlert('Text has been copied to clipboard', 'success')
    }
  }

  const resetText = () => {
    if(text.length === 0){
      prop.showAlert('No text to reset', 'warning')
    }
    else{
      setText(originaltext)
      prop.showAlert('Reset has been done', 'success')
    }
  }

  const handleExtraSpaces = () => {
    if(text.length === 0){
      prop.showAlert('Please add some text and try', 'warning')
    }
    else{
      checkCachedText();
      let insertedText = text.split(/[ ]+/);
      setText(insertedText.join(" "));
      prop.showAlert('Extra spaces have been removed', 'success')
    }
  }

  const handleOnChange = (evevnt) => {
    setText(evevnt.target.value)
    if(originaltext === text){
      addToOriginalText(evevnt.target.value)
    }
  }


  return (
    <>
      <div className='container'>
        <h1 style={{color: prop.modeType === 'dark' ? 'white' : 'black'}}>{prop.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{color: prop.modeType === 'dark' ? 'white' : 'black', backgroundColor: prop.modeType === 'dark' ? 'black' : 'white'}}></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary mx-1 my-2" onClick={convertToUpperCase}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={convertToLowerCase}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={resetText}>Reset</button>
          <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear text</button>
          
        </div>
      </div>
      <div className='container'>
        <h1 style={{color: prop.modeType === 'dark' ? 'white' : 'black'}}>Your text summary</h1>
        <p style={{color: prop.modeType === 'dark' ? 'white' : 'black'}}>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.</p>
      </div>
    </>
    
  )
}
