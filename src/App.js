import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import "./App.css";

const router = (mode, toggleMode, alert, showAlert) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Outlet />
          </div>
        </>
      ),
      children: [
        {
          path: "/",
          element: <TextForm showAlert={showAlert} heading="Enter text to analyze" />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light";
    }
  };

  return <RouterProvider router={router(mode, toggleMode, alert, showAlert)} />;
}

export default App;
