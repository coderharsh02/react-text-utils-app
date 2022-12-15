import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      />
      {/* <TextForm heading="Enter Your Text Below" mode={darkMode} /> */}
      <About mode={darkMode}/>
    </>
  );
}

export default App;
