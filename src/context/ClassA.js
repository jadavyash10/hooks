import React, { Component } from 'react'
import { AppContext } from './Class';
import ClassB from './ClassB'

export class ClassA extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Rerendering a Component");
        return (
            <>
          <AppContext.Consumer>
            {({ number }) => {
                console.log("a comp consumer")
                return (
                    <div >
                  {number} <br />
                </div>
              );
            }}
          </AppContext.Consumer>
          {/* <ClassB/> */}
            </>
        );
      }
}

export default ClassA