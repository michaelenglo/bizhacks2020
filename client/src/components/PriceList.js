import React, { PureComponent } from "react";
import { Pane, Heading } from "evergreen-ui";

export class PriceList extends PureComponent {
  render() {
    return (
      <Pane
        display="flex"
        paddingLeft="50%"
        marginTop="10px"
        width="100%"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Heading>1 x Item</Heading>
        <Heading>$10.00</Heading>
      </Pane>
    );
  }
}

export default PriceList;
