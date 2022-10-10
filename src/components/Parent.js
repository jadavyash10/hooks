import React, { Component } from "react";
import Memo from "./Memo";
import Purecomp from "./Purecomp";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "tagline",
    };
  }
  componentDidMount() {
    setInterval(() => {
        this.setState({ name: "react js" });
    }, 5000);
  }

  render() {
    console.log("parent");
    return (
      <div>
        <Purecomp name={this.state.name} />
        <Memo name={this.state.name}/>
      </div>
    );
  }
}

export default Parent;
