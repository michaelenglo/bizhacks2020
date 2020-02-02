import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Pane, Text, TextInput, SearchInput, Card } from "evergreen-ui";
import logo from "../bb-logo.png";
import ProductDetailsCard from "../components/ProductDetailsCard";

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
              AFFILIATES
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
            <ProductDetailsCard
              onClick={() => window.open("http://localhost:3000/bundles/1234")}
              summary="React Tech Tips"
              ratings={3}
              price={123}
              noOfReviews={103134}
              url="/pics/marques-logo.png"
            />
            <ProductDetailsCard
              summary="Christmas Bundle"
              ratings={3}
              price={599}
              noOfReviews={1230}
              url="/pics/TREE.png"
            />
            <ProductDetailsCard
              summary="Linus Tech Tips"
              ratings={3}
              price={259}
              noOfReviews={30123}
              url="/pics/ltt.png"
            />
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
