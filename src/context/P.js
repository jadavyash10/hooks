import React from 'react'
import { ThemeContext } from './MultiContext'
import { UserContext } from './MultiContext'
const P = () => {
  return (
    <ThemeContext.Consumer>
    {theme => (
      <UserContext.Consumer>
        {user => (
        <h2>name is {user} and theme {theme}</h2> 
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
  )
}

export default P