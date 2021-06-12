import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handaleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);

    // divContainer.current.innerText = "fvfdvdvd";
  };

  useRef(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <div>
      <form className="form">
        <div>
          <input type="text" ref={refContainer}></input>

          <button type="button" onClick={handaleSubmit}>
            submit
          </button>
        </div>
      </form>
      <div ref={divContainer}>yo.......</div>
    </div>
  );
};

export default UseRefBasics;
