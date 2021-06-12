import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [state, setstate] = useState(window.innerWidth);

  // const checkSize = () => {
  //   setstate(window.innerWidth);
  // };

  useEffect(() => {
    window.addEventListener("resize", () => setstate(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setstate(window.innerWidth));
    };
  }, []);

  return (
    <div>
      <h1>window</h1>
      <h2>{state}px</h2>
    </div>
  );
};

export default UseEffectCleanup;
