import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setSize(window.innerWidth));
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size :{size}px</h2>
    </div>
  );
};

export default ShowHide;
