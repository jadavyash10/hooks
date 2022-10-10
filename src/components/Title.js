import React from 'react'

const Title = () => {
    console.log("title render")
  return (
    <div>Title</div>
  )
}

export default React.memo(Title)