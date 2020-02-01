import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Pane, Text, TextInput, SearchInput, Card } from "evergreen-ui";
import logo from "../bb-logo.png";

export class HomePage extends Component {
  render() {
    return (
      <Pane>
        <Pane
          paddingX="10px"
          height="70vh"
          width="100%"
          backgroundColor="var(--main-bb-color)"
          paddingTop="200px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Pane>
            <img src={logo} width="200px" className="App-logo" alt="logo" />
            <Text color="white" marginLeft="10px">
              BUNDLES
            </Text>
          </Pane>
          <Pane marginTop="100px" width="80%">
            <SearchInput
              height="50px"
              placeholder="Type in a keyword..."
              width="100%"
            />
          </Pane>
        </Pane>

        <Pane
          paddingX="10px"
          width="100%"
          display="flex"
          flexDirection="column"
          paddingX="10px"
          paddingY="40px"
        >
          <Pane
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>            
          </Pane>
        </Pane>


        <Pane
          paddingX="10px"
          width="100%"
          display="flex"
          flexDirection="column"
          paddingX="10px"
          paddingY="40px"
        >
          <Pane
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>            
          </Pane>
        </Pane>


        <Pane
          paddingX="10px"
          width="100%"
          display="flex"
          flexDirection="column"
          paddingX="10px"
          paddingY="40px"
        >
          <Pane
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>
            <Card padding="10px" elevation="3" width="20%" height="250px">
              ajsjkdfj
            </Card>            
          </Pane>
        </Pane>

      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
