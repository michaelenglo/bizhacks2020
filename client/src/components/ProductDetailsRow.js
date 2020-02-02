import React, { PureComponent } from "react";
import { Pane } from "evergreen-ui";
import Headline from "../pages/Headline";

export class ProductDetailsRow extends PureComponent {
  render() {
    return (
      <div ref={this.props.innerRef}>
        <Headline title={this.props.title} />
        <Pane
          display="flex"
          flexDirection="row"
          justifyContent="start"
          overflowX="auto"
        >
          {this.props.children}
        </Pane>
      </div>
    );
  }
}

export default ProductDetailsRow;
