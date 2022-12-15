import React from "react";

export default function Alert(props) {
  const dismissAlert = () => {
    document.getElementById("changeAlert").style.display = "none";
  };

  if (props.alert) {
    if (document.getElementById("changeAlert"))
      document.getElementById("changeAlert").style.display = "block";
  }

  return (
    // if(props.alert)
    props.alert && (
      <div
        className={`alert alert-${props.alert.type}`}
        role="alert"
        style={{ display: "block" }}
        onClick={dismissAlert}
        id="changeAlert"
      >
        <strong>{props.alert.type}</strong> {props.alert.msg}{" "}
        {console.log(props)}
      </div>
    )
  );
}
