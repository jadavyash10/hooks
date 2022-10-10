import React from "react";
import Hoc from "./Hoc";

const ClickCounter = (props) => {
  return (
    <div>
        <h1>Hoc Components</h1>
      <h1>
        <button onClick={props.increment}>{props.name}{props.data}</button>
      </h1>
    </div>
  );
};

export default Hoc(ClickCounter, 10,13);
