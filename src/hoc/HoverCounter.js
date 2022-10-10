import React from "react";
import Hoc from "./Hoc";

const HoverCounter = (props) => {
  return (
    <div>
     
      <h1>
        <button onMouseOver={props.increment}>{props.data}</button>
      </h1>
    </div>
  );
};

export default Hoc(HoverCounter, 1);
