import React, { Component } from 'react'
import { AppContext } from './Class'
import { Purecomp } from '../components/Purecomp';

export class ClassB extends Purecomp {
  render() {
      console.log("b comp ")
    return (
      <div>
        <AppContext.Consumer>
        {({ text }) => {
      console.log("b comp  consumer")
            
          return <div >
            {text} <br />
          </div>
        }}
      </AppContext.Consumer>
      </div>
    )
  }
}

export default ClassB