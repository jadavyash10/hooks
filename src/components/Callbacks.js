import React, { useState, useCallback, useMemo } from "react";
import Button from "./Button";
import List from "./List";
import Title from "./Title";

const Callbacks = () => {
  const [age,setAge] = useState(100)
  const [salary,setSalary] = useState(20000)
  const [day, setDay] = useState(5)
  const [dark, setDark] = useState(false)

  const theme = {
    backgroundColor:dark?'#333':'#FFF',
    color:dark?'#FFF':'#333'
  }

const getItem = useCallback((num) => {
  return [day + num , day + 1 +  num ,day + 2 + num ]
},[day])


  const incAge = useCallback(() => {
    setAge(age + 10)
  },[age])

  const incSalary = useCallback(() => {
    setSalary(salary + 15000)
  },[salary])

  return (
    <div>
      <Title/>
      {age}
      <Button handleData = {incAge}>Age</Button>
      {salary}
      <Button handleData = {incSalary}>salary</Button>

      <div style={theme}>
        <input type="text" onChange={(e)=>{setDay(Number(e.target.value))}}/>
        {/* <button onClick={() => {setDark((pre=>!pre))}}>Toggle</button>
        <List getItem={getItem}/> */}
      </div>
     
    </div>
  );
};

export default Callbacks;
