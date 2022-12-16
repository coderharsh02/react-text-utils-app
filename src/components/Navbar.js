// abbreviation to import function react component => rfc
import React, { useState } from "react";
// abbreviation to import PropTypes => impt
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [cssProps, setCssProps] = useState({
    darkMode: props.mode,
    navBarClass: "light",
  });

  const onModeChangeHandler = () => {
    props.toggleMode();
    if (cssProps.darkMode) {
      setCssProps({
        darkMode: false,
        navBarClass: "light",
      });
      props.showClickAlert("Mode change to light", "success");
      document.title = "TextUtilsApp - Light Mode";
    } else {
      setCssProps({
        darkMode: true,
        navBarClass: "dark",
      });
      props.showClickAlert("Mode change to dark", "success");
      document.title = "TextUtilsApp - Dark Mode";
    }

    // flashing title
    // setInterval(() => {
    //   document.title = 'TextUtilsApp - green Mode'
    // }, 1000);
    // setInterval(() => {
    //   document.title = 'TextUtilsApp - red Mode'
    // }, 1200);
  };

  const changeBackgroundColor = (e) => {
    if (e.target.classList[1]) {
      props.changeBg(e.target.classList[1]);
      document.body.classList.add(e.target.classList[1]);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${cssProps.navBarClass} bg-${cssProps.navBarClass}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>

          <div className="dot bg-primary" onClick={changeBackgroundColor}></div>
          <div className="dot bg-success" onClick={changeBackgroundColor}></div>
          <div className="dot bg-warning" onClick={changeBackgroundColor}></div>
          <div className="dot bg-danger" onClick={changeBackgroundColor}></div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={onModeChangeHandler}
            />

            <label
              className={`form-check-label ${
                cssProps.darkMode ? "text-light" : ""
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {cssProps.darkMode ? "Disable" : "Enable"} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  about: "Default About",
};
