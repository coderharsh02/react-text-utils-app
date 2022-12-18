import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [alert, setAlert] = useState(null);

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
    <Router>
      <Navbar
        title="Text Utils App"
        about="About"
        mode={darkMode}
        toggleMode={toggleMode}
        showAlert={showClickAlert}
      />

      <Alert alert={alert} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Enter Your Text Below"
              mode={darkMode}
              showAlert={showAutoAlert}
            />
          }
        ></Route>
        <Route exact path="/about" element={<About mode={darkMode} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
