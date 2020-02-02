import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Pane,
  Text,
  TextInput,
  SearchInput,
  Card,
  Heading,
  Button
} from "evergreen-ui";
import Header from "../components/Header";
import BundleInfoSection from "../components/BundleInfoSection";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsRow from "../components/ProductDetailsRow";
import BBButton from "../components/BBButton";
import Divider from "../Divider";
import PriceList from "../components/PriceList";

export class BundleDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ["0", "1", "2"],
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
        key={p.name}
        selected={this.state.selected[0] === `${index}`}
        ratings={p.ratings}
        editorNote={p.editorNote}
        noOfReviews={p.reviewCount}
        url={p.url}
        price={p.price}
        summary={p.summary}
      />
    ));
    const category2 = this.state.category2.map((p, index) => (
      <ProductDetailsCard
        title={p.name}
        key={p.name}
        selected={this.state.selected[1] === `${index}`}
        ratings={p.ratings}
        editorNote={p.editorNote}
        noOfReviews={p.reviewCount}
        url={p.url}
        price={p.price}
        summary={p.summary}
      />
    ));
    const category3 = this.state.category3.map((p, index) => (
      <ProductDetailsCard
        title={p.name}
        key={p.name}
        selected={this.state.selected[2] === `${index}`}
        ratings={p.ratings}
        editorNote={p.editorNote}
        noOfReviews={p.reviewCount}
        url={p.url}
        price={p.price}
        summary={p.summary}
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
          <ProductDetailsRow title="Step 3 - Pick Your Mouse">
            {category3}
          </ProductDetailsRow>
        </Pane>

        <Pane
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          paddingY="20px"
          paddingX="50px"
        >
          <PriceList />
        </Pane>
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          paddingTop="40px"
          paddingBottom="75px"
          paddingX="70px"
        >
          <Divider />
          <Heading marginTop="50px" size="700">
            Total: $123090
          </Heading>
          <BBButton />
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BundleDetailsPage);
