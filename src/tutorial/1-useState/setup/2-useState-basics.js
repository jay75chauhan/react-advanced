import React, { useState } from "react";
// use
// component name must uppercase
// must be in function/component body
//   cannot call conditonally

const UseStateBasics = () => {
  const [text, setText] = useState("randome titile");
  const handleClick = () => {
    if (text === "randome titile") {
      setText("mojjjj");
    } else {
      setText("randome titile");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        click to change{" "}
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
