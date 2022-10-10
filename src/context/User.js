import React, { useState,createContext } from 'react'
import A from './A'

export const Name = createContext();

const User = () => {
    const [color,setColor] = useState("green");
    const [day,setDay] = useState("Sunday");
    const getDay =(item) =>{
        setDay(item);
    }
  
  return (
    <Name.Provider value = {{txtcolor: color,name:"tagline",setDay: setDay}}>
    <div>
        <h1>{day}</h1>
        <A/>
    </div>
    </Name.Provider>
  )
}

export default User