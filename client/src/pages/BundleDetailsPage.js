import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Pane, Text, TextInput, SearchInput, Card, Heading } from "evergreen-ui";
import logo from "../bb-logo.png";

export class BundleDetailsPage extends Component {
  render() {
    return (
      <Pane width="100%">
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

        <Pane boxShadow="inset 0px -2px 6px #888888" height="40vh" backgroundColor="white">
            
        </Pane>

        <Pane minHeight="40vh" backgroundColor="white">

            <Pane display="flex" flexDirection="column" paddingY="20px" paddingX="50px">
                <Heading size={700}>Monitors</Heading>
                <Pane borderTop="default" marginY="10px" height="4px" />
                <Pane display="flex" flexDirection="row" justifyContent="space-between">
                    <Pane background="tint1" border="default" width="300px" height="350px">
                        asjdkl
                    </Pane>
                    
                    <Pane background="tint1" border="default" width="300px" height="350px">
                        asjdkl
                    </Pane>
                    <Pane background="tint1" border="default" width="300px" height="350px">
                        asjdkl
                    </Pane>
                </Pane>
            </Pane>

        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BundleDetailsPage);
