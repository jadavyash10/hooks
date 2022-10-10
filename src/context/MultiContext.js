import React, { Component,createContext} from 'react'
import P from './P';

export const ThemeContext = createContext("red");
export const UserContext = createContext({name:"guest"});

export class MultiContext extends Component {
    
  render() {
    // const {signedInUser, theme} = this.props;

    // App component that provides initial context values
    return (
      // <ThemeContext.Provider value={"adfasfas"}>
        <UserContext.Provider value={"signedInUser"}>
          <P />
        </UserContext.Provider>
      // </ThemeContext.Provider> 
    );
}
}

export default MultiContext;