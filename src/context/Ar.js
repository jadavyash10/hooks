import React,{useContext} from 'react'
import { ArrProvider } from './Arr'

const Ar = () => {
    const { value1, value2 } = useContext(ArrProvider);
    const [value , setValue ] = value1;
    const [val2 , setVal2 ] = value2;
    console.log("ar components")
  return (
    <div>
        <h2>{value},{val2}</h2>
  <button onClick={() =>{setValue(value + 10)}}>Arrr</button>

    </div>
  )
 
}

export default Ar