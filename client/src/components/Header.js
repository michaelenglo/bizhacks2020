import React, { PureComponent } from "react";
import { Pane, SearchInput } from "evergreen-ui";
import logo from "../bb-logo.png";


export class Header extends PureComponent {
  render() {
    return (
      <Pane
        paddingX="10px"
        height="10vh"
        backgroundColor="var(--main-bb-color)"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <img src={logo} width="50px" className="App-logo" alt="logo" />
        <SearchInput
          height="40px"
          placeholder="Type in a keyword..."
          width="100%"
          marginLeft="20px"
          marginRight="30%"
        />
      </Pane>
    );
  }
}

export default Header;
