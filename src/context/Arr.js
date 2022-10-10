import React,{createContext,useState} from 'react'
import Ar from './Ar';
import Arrr from './Arrr';

export const  ArrProvider = createContext();
const Arr = () => {
    const [value,setValue] = useState(12);
    const [val,setVal2] = useState(122);
    console.log("arr components")

  return (
    <ArrProvider.Provider value={{value1 :[value, setValue],value2 : [val,setVal2]}}>
        <Ar/>
        <Arrr/>
    </ArrProvider.Provider>
  )
    
  
}

export default Arr;