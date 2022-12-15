import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChangeText = (e) => {
    setText(e.target.value);
  };

  const handleUpBtnClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoBtnClick = () => {
    setText(text.toLowerCase());
  };

  return (
    <>
      <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChangeText}
            style={props.mode ? {
              backgroundColor: "rgb(43 31 63)",
              outline: "white",
              color: "white"
            } : {
              backgroundColor: "white",
              outline: "black",
              color: "black"
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpBtnClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoBtnClick}>
          Convert To LowerCase
        </button>
      </div>

      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(' ').length} words & {text.length} characters</p>
        <p>Read Time: {text.split(' ').length * 0.008} minutes</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
