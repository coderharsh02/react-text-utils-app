import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text Here");

  const handleOnChangeText = (e) => {
    setText(e.target.value);
  };

  const handleUpBtnClick = () => {
    setText(text.toUpperCase());
  }

  return (
    <div className="container my-3">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChangeText}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpBtnClick}>Convert To UpperCase</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
