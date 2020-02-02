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

export class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    const myCart = [
      ...this.props.category1.filter(i => i.id === this.props.selected[0]),
      ...this.props.category2.filter(i => i.id === this.props.selected[1]),
      ...this.props.category3.filter(i => i.id === this.props.selected[2])
    ];
    this.setState({ cart: myCart });
  }
  render() {
    const cartItems = this.state.cart.map(i => {
      return (
        <ProductDetailsCard
          title={i.name}
          ratings={i.ratings}
          editorNote={i.editorNote}
          noOfReviews={i.reviewCount}
          url={i.url}
          price={i.price}
          summary={i.summary}
        />
      );
    });

    return (
      <Pane width="100%">
        <Header />

        <Pane
          display="flex"
          paddingLeft="50%"
          marginTop="100px"
          marginBottom="100px"
          width="100%"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Heading size="900">Your Cart</Heading>
        </Pane>

        <Pane display="flex" marginTop="10px" width="100%" flexDirection="row">
          {cartItems}
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
            Total: $617
          </Heading>
          <Heading
            size="400"
            color="white"
            width="150px"
            padding="10px"
            backgroundColor="#0046be"
            cursor="pointer"
            marginTop="30px"
          >
            Pay Now
          </Heading>
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
