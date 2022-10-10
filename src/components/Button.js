import React, { memo } from 'react'

const Button = (props) => {
    console.log("first" ,props.children)
  return (
    <div>
        <button onClick={props.handleData}>{props.children}</button>
    </div>
  )
}

export default memo(Button)