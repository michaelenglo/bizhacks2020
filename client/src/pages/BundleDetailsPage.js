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
      category1: [],
      category2: [],
      category3: []
    };
  }

  componentDidMount() {
    this.setState({
      category1: this.props.category1,
      category2: this.props.category2,
      category3: this.props.category3
    });
  }

  render() {
    const category1 = this.state.category1.map((p, index) => (
      <ProductDetailsCard
        title={p.name}
        selected={this.state.selected[0] === `${index}`}
        ratings={p.ratings}
        editorNote={p.editorNote}
        noOfReviews={p.reviewCount}
        url={p.url}
      />
    ));
    const category2 = this.state.category2.map((p, index) => (
      <ProductDetailsCard
        title={p.name}
        selected={this.state.selected[0] === `${index}`}
        ratings={p.ratings}
        editorNote={p.editorNote}
        noOfReviews={p.reviewCount}
        url={p.url}
      />
    ));
    const category3 = this.state.category3.map((p, index) => (
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
            {category1}
          </ProductDetailsRow>

          <ProductDetailsRow title="Step 2 - Pick Your Keyboard">
            {category2}
          </ProductDetailsRow>
          <ProductDetailsRow title="Step 2 - Pick Your Mouse">
            {category3}
          </ProductDetailsRow>
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BundleDetailsPage);
