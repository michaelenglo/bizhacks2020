import React, { PureComponent } from "react";
import { Pane, Heading } from "evergreen-ui";

export class PriceList extends PureComponent {
  render() {
    return (
      <Pane
        display="flex"
        paddingLeft="20%"
        marginTop="10px"
        width="100%"
        justifyContent="space-between"
        flexDirection="row"
      >
  <Heading>1 x {this.props.name}</Heading>
    <Heading>${this.props.price}</Heading>
      </Pane>
    );
  }
}

export default PriceList;
