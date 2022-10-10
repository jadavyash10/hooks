import React, { useContext } from 'react'
import D from './D'
import  { Name } from './User'

const C = () => {
    const {txtcolor,name} = useContext(Name)
    console.log('c comp :>> ');
  return (
  <h1>{txtcolor} {name}
     <D/>
  </h1>
 
  )
}

export default C