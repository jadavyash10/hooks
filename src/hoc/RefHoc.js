import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Popup = (props) => {
  const { name, forwardRef } = props;
  console.log("1234",name, forwardRef); // see here
  return (
    <div ref={forwardRef}>
      <div>{name}</div>
    </div>
  );
};
function withClose(Component) {
  class ClickContainer extends React.Component {
    constructor() {
      super();
      this.handleClose = this.handleClose.bind(this);
    }

    containerRef;

    componentDidMount() {
      document.addEventListener("click", this.handleClose);
    }

    componentWillUnmount() {
      document.removeEventListener("click", this.handleClose);
    }

    handleClose(e) {
      // I expect having here context of container of wrapped component to do something like
      const { forwardRef } = this.props; // <- I expect having context in forwardedRef variable
      console.log(forwardRef);
    }

    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component forwardRef={forwardRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <ClickContainer {...props} forwardRef={ref} />;
  });
}

const Closable = withClose(Popup);

class App extends React.Component {
  closeRef = React.createRef();
  render() {
    console.log("asd",this.closeRef);
    return (
      <div className="App">
        <Closable name="I am Closable" ref={this.closeRef} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
