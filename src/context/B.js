import React,{useContext} from 'react'
import C from './C'
import { Name } from './User';

const B = () => {
    const {setDay} = useContext(Name)
    const day = "wednesday"
    console.log('b comp :>> ');
  return (
    <div>
        <button onClick={()=>{setDay(day);}}>Change</button>
        <C/>
    </div>
  )
}

export default B