import React, { PureComponent } from "react";
import { Pane, Text, Heading, Strong, Icon } from "evergreen-ui";
import logoMyglo from "../myglo_dark.svg";
import logo from "../marques-logo.png";

export class BundleInfoSection extends PureComponent {
  render() {
    return (
      <Pane
        boxShadow="inset 0px -2px 6px #888888"
        height="40vh"
        overflow="hidden"
        paddingX="30px"
        paddingBottom="20px"
        display="flex"
        alignItems="flex-end"
        background='black url("../pics/marques.png") no-repeat fixed center'
      >
        <Pane
          width="95%"
          height="250px"
          alignItems="start"
          display="flex"
          flexDirection="column"
          padding="5px"
          justifyContent="flex-end"
        >
          <Pane>
            <img src={logo} height="100px" />
          </Pane>
          <Heading color="white" size={900}>
            THE Gaming Setup Starter Kit
          </Heading>
          <Heading color="white" marginTop="5px" size={500}>
            by Marques - Tech Reviewer
          </Heading>
          <Pane
            color="white"
            display="flex"
            marginTop="5px"
            alignItems="center"
          >
            <Strong color="lightblue">VERIFIED</Strong>
            <Icon color="lightblue" icon="small-tick" size="18px" />
          </Pane>
          <Text color="white" marginTop="5px" align="left" size={500}>
            Marques Brownlee is a youtuber that reviews the most up to date tech
            gadgets. React has about 100 M subscribers on his channel.
          </Text>
        </Pane>
      </Pane>
    );
  }
}

export default BundleInfoSection;
