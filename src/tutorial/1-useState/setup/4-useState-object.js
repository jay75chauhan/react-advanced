import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "jay",
    age: "20",
    message: "yo......",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "no......" });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change
      </button>
    </div>
  );
};

export default UseStateObject;
