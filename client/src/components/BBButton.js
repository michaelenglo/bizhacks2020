import React, { PureComponent } from "react";
import { Pane, Heading } from "evergreen-ui";

export class BBButton extends PureComponent {
  render() {
    return (
      <Pane
        width="150px"
        padding="10px"
        backgroundColor="#0046be"
        cursor="pointer"
        marginTop="30px"
      >
        <Heading size="400" color="white">
          Add to Cart
        </Heading>
      </Pane>
    );
  }
}

export default BBButton;
