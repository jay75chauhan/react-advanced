import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [state, setstate] = useState(0);
  console.log(state);

  useEffect(() => {
    console.log("gooo");

    if (state >= 1) {
      document.title = `new mess..${state}`;
    }
  }, []);

  return (
    <div>
      <h1>{state}</h1>

      <button className="btn" onClick={() => setstate(state + 1)}>
        +
      </button>
    </div>
  );
};

export default UseEffectBasics;
