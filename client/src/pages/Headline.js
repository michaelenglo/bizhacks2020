import React, { PureComponent } from "react";
import { Pane, Heading } from "evergreen-ui";

export class Headline extends PureComponent {
  render() {
    return (
      <Pane>
        <Heading marginTop="100px" size={700}>{this.props.title}</Heading>
        <Pane borderTop="default" marginY="10px" height="4px" />
      </Pane>
    );
  }
}

export default Headline;
