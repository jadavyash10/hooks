import React from 'react'

export class Purecomp extends React.PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Purecomp'
    }
  }
    handleClick = () => {
    this.setState({ name: 'handleClxyick' })
   }
  render() {
    console.log("pure comp")
    return (
      <div>
        {this.props.name}
        <button onClick={this.handleClick}>pure</button>
      </div>
    )
  }
}

export default Purecomp