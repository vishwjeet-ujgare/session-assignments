import React from "react";

export default  function ShowMsg(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p> {props.message}</p>
    </div>
  );
}

