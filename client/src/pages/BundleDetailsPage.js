import React, { Component } from "react";
import { connect } from "react-redux";
import { Pane } from "evergreen-ui";
import Header from "../components/Header";
import BundleInfoSection from "../components/BundleInfoSection";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsRow from "../components/ProductDetailsRow";

export class BundleDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ["0", "1", "4"],
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  render() {
    const products = this.state.products.map((p, index) => (
      <ProductDetailsCard
        title={p.name}
        selected={this.state.selected[0] === `${index}`}
        ratings={p.ratings}
        editorNote={p.editorNote}
        noOfReviews={p.reviewCount}
        url={p.url}
      />
    ));

    return (
      <Pane width="100%">
        <Header />

        <BundleInfoSection />

        <Pane
          display="flex"
          flexDirection="column"
          paddingY="20px"
          paddingX="50px"
        >
          <ProductDetailsRow title="Step 1 - Pick Your Monitor">
            {products}
          </ProductDetailsRow>

          <ProductDetailsRow>{products}</ProductDetailsRow>
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BundleDetailsPage);
