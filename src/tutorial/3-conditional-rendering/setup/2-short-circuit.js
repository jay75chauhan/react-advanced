import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("jay chauhan");

  const [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* {if(){console.log("nit work")}
    } */}

      <h1>{text || "heloo.."}</h1>

      <button className="btn " onClick={() => setIsError(!isError)}>
        error
      </button>
      {/* <h2>{isError && <h1>is error...</h1>}</h2> */}

      {isError ? (
        <p>there is error...</p>
      ) : (
        <div>
          <p>no error...</p>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
