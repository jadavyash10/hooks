import React from 'react'
import { Name } from './User'

const D = () => {
    return(
        <div>
    <Name.Consumer>
        
        {({txtcolor})=>{
             console.log('d consumer comp :>> ');
            return <div>this is D components color  {txtcolor}</div>
        }}
  </Name.Consumer>
  </div>
    )
}

export default D