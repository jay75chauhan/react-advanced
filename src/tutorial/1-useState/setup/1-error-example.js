import React from "react";

const ErrorExample = () => {
  let title = "randome ";
  const handleClick = () => {
    title = "randome nonononononon ";
    console.log("click");
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button typeof="button" className="btn" onClick={handleClick}>
        press
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
