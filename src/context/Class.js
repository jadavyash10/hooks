import React, { Component } from 'react'
import ClassA from './ClassA';
import ClassB from './ClassB';
export const AppContext = React.createContext();

export class Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         number:1,
         text: "testing context api"
      }
    }

    updateNumber = () => {
        const randomNumber = Math.random() * 100;
        this.setState({ number: randomNumber });
      };


  render() {
    console.log('class update' )
    return (
      <div>
        <AppContext.Provider value={{...this.state,updateNumber:this.updateNumber}}>
            <ClassA/>
            <ClassB/>
            <button onClick={this.updateNumber}>Change Name </button>
        </AppContext.Provider>

      </div>
    )
  }
}

export default Class