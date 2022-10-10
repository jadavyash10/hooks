import React, { useState } from 'react'

const Memo = ({name}) => {
  const [first, setfirst] = useState(0)
  console.log("memo comp")


  return (
   
    <div>
        {name}
        <button onClick={()=>{setfirst(first + 1)}}>memo</button>
    </div>
  )
}

export default React.memo(Memo)