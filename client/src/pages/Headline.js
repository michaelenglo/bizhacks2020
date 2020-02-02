import React, { PureComponent } from "react";
import { Pane, Heading } from "evergreen-ui";
import Divider from "../Divider";

export class Headline extends PureComponent {
  render() {
    return (
      <Pane>
        <Heading marginTop="100px" size={700}>{this.props.title}</Heading>
        <Divider />
      </Pane>
    );
  }
}

export default Headline;
