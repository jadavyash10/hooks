import React, { useState } from "react";

const State = () => {
  const [num, setNum] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const [count, setCount] = useState([1, 2, 3, 4, 5]);

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue", year: "2022" };
    });
  };

  const addArrays = () => {
    setCount((pre) => {
      return [...pre, 8];
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>

      <button type="button" onClick={addArrays}>
        add
      </button>
      {count.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </>
  );
};

export default State;
