import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='black'
      showAlert("dark mode has been enalbed","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enalbed","success")
    }
  };
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert}heading="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
