import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");
    const handleUpClick=()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper Case","success")
    }
    const handleLoClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower Case","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const wordCount = (text)=>{
      let regex = /\s+\S+/;
      let numOfWords = text.split(regex);
      return numOfWords.length;
    }
  return (
    <>
    <div className="mb-6"  style={{background:props.mode==='dark'?'white':'black'}}>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.heading}
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={text}
        value={text}
        onChange={handleOnChange}
        style={{background: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
      ></textarea>
      <button type="button" onClick={handleUpClick}className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Convert to Uppercase</button>
      <button type="button" onClick={handleLoClick}className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Convert to Lowercase</button>
      </div>
    <div className="container"  >
        <h1 className={`text-${props.mode} ${props.mode}:text-gray-300`}><b>Your Text Summary</b></h1>
        <p><b>{text===""? 0 : wordCount(text)}</b>words and <b>{text.length}</b>characters</p>
        
        <p><b>{0.008 *text.split(" ").length } </b>minutes to read</p>
        <h2><b>Preview</b></h2>
        <p>{text.length>0?text:"Enter some text in textbox to preview here"}</p>
    </div>
    </>
  );
}
