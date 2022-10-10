import React from 'react'

const Hoc = (WrapperComponetn,val,num) => {
    class Counter extends   React.Component{
        
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }

       increment = ()=>{
        this.setState((pre)=>{
            return {count : pre.count + 1 + val}
           })
       }

        render() {
    console.log(this.props.name)

        return <WrapperComponetn data = {this.state.count} increment = {this.increment} {...this.props}/>
    }
    }
  return Counter
}

export default Hoc