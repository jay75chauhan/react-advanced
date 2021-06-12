import React, { useState } from "react";

const UseStateCounter = () => {
  let [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      // setCount(count++);
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <div>
      <h1>counter</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={() => setCount(count++)}>
        {" "}
        +{" "}
      </button>
      <button className="btn" onClick={() => setCount(count--)}>
        {" "}
        -{" "}
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>complex counter</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={complexIncrease}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default UseStateCounter;
