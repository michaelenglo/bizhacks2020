import React, { PureComponent } from "react";
import { Pane, Heading, Text, Strong, Link } from "evergreen-ui";
import logo from "../logo.svg";
import StarRatings from "./StarRatings";

export class ProductDetailsCard extends PureComponent {
  render() {
    return (
      <Pane
        cursor="pointer"
        textAlign="left"
        margin="10px"
        padding="10px"
        border="default"
        minWidth="300px"
        maxWidth="300px"
        minHeight="350px"
      >
        <Pane
          minWidth="200px"
          height="250px"
          backgroundImage={`url(..${this.props.url})`}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
        ></Pane>
        {this.props.selected ? <Heading color="green" marginTop="10px" align="right" marginBottom="20px">
          SELECTED
        </Heading> : <Pane minHeight="35px"> </Pane>}
        <Heading marginTop="10px" align="left" marginBottom="20px">
          "{this.props.editorNote}"
        </Heading>
        <Text>
          Samsung 32" 60Hz 4ms Curved PLS LED Monitor (LC32F391FWNXZA) - White
        </Text>
        <StarRatings
          ratings={this.props.ratings}
          reviews={this.props.noOfReviews}
        />
        <Heading fontWeight="700" marginTop="20px" marginBottom="5px" size="600">
            $249.00
        </Heading>
        <Heading marginTop="20px" marginBottom="5px" size="100">
          Editors Note:{" "}
        </Heading>
        <Text marginTop="10px">
          This item is a really good item for people who are looking into a more
          budget friendly monitors. It's got 28.6 GHz of RMP and dual processing
          quickdown.
        </Text>
      </Pane>
    );
  }
}

export default ProductDetailsCard;
