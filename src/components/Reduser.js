import React, { useReducer } from "react";

const initialstate = {
  fcounter : 0,
  scounter : 10
};
const reduser = (state, action) => {
  switch (action.type) {
    case "add":
      return {...state, fcounter: state.fcounter + action.value };
      break;
    case "remove":
      return {...state, fcounter: state.fcounter - action.value };
      break;
    case "add1":
      return {...state, scounter: state.scounter + action.value };
      break;
    case "remove1":
      return {...state, scounter: state.scounter - action.value };
      break;
    default:
      return state;
  }
};
const Reduser = () => {
  const [count, dispatch] = useReducer(reduser, initialstate);
  return (
    <div>
      {count.fcounter} {count.scounter} 
      <button
        onClick={() => {
          dispatch({ type: "add", value: 5 });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "remove", value: 5 });
        }}
      >
        remove
      </button>
      <button
        onClick={() => {
          dispatch({ type: "add1", value: 10 });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "remove1", value: 10 });
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Reduser;
