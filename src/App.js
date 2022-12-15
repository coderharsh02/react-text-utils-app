import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import AlertClick from "./components/AlertClick";
import AlertAuto from "./components/AlertAuto";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [alert, setAlert] = useState(null);

  const [bgColor, setBgColor] = useState("light");

  const changeBackgroundColor = (color) => {
    document.body.className = '';
    setBgColor(color);
  };

  const showClickAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });

  };

  const showAutoAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    setDarkMode(darkMode ? false : true);
    if (!darkMode) {
      document.body.style.backgroundColor = "rgb(43 31 63)";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils App"
        about="About"
        mode={darkMode}
        toggleMode={toggleMode}
        showClickAlert={showClickAlert}
        changeBg={changeBackgroundColor}
      />

      <AlertClick alert={alert} />

      <AlertAuto alert={alert} />

      <TextForm
        heading="Enter Your Text Below"
        mode={darkMode}
        showAutoAlert={showAutoAlert}
      />

      {/* <About mode={darkMode}/> */}
    </>
  );
}

export default App;
