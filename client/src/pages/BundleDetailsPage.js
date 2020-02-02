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
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BundleInfoSection from "../components/BundleInfoSection";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsRow from "../components/ProductDetailsRow";
import BBButton from "../components/BBButton";
import Divider from "../Divider";
import PriceList from "../components/PriceList";
import assert from "assert";

export class BundleDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.gotoRefs = [];

    this.state = {
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

  componentDidUpdate() {
    console.log(this.props.selected);
    // if (
    //   this.props.selected[0] !== this.props.selected[0] ||
    //   this.props.selected[1] !== this.props.selected[1] ||
    //   this.props.selected[2] !== this.props.selected[2]
    // ) {
    //   console.log("updated");
    //   this.setState({
    //     selected: this.props.selected
    //   });
    // }
  }
  render() {
    const category1 = this.state.category1.map((p, index) => (
      <ProductDetailsCard
        title={p.name}
        selected={this.props.selected[0] === p.id}
        onClick={() => {
          const newSelected = this.props.selected.map((s, i) => {
            return i === 0 ? p.id : s;
          });
          this.props.toggleSelected(newSelected);
          this.gotoRefs[1].scrollIntoView({ behavior: "smooth" });
        }}
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
        selected={this.props.selected[1] === p.id}
        onClick={() => {
          const newSelected = this.props.selected.map((s, i) => {
            return i === 1 ? p.id : s;
          });
          this.props.toggleSelected(newSelected);
          this.gotoRefs[2].scrollIntoView({ behavior: "smooth" });
        }}
        title={p.name}
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
        selected={this.props.selected[2] === p.id}
        onClick={() => {
          const newSelected = this.props.selected.map((s, i) => {
            return i === 2 ? p.id : s;
          });
          this.props.toggleSelected(newSelected);
        }}
        title={p.name}
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
          <ProductDetailsRow
            title="Step 1 - Pick Your Monitor"
            innerRef={ref => (this.gotoRefs[0] = ref)}
          >
            {category1}
          </ProductDetailsRow>

          <ProductDetailsRow
            title="Step 2 - Pick Your Keyboard"
            innerRef={ref => (this.gotoRefs[1] = ref)}
          >
            {category2}
          </ProductDetailsRow>
          <ProductDetailsRow
            title="Step 3 - Pick Your Mouse"
            innerRef={ref => (this.gotoRefs[2] = ref)}
          >
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
          {this.props.selected.map((id, i) => {
            if (id < 0) {
              return null;
            }
            const selectedItem = this.state["category" + (i + 1)][id];
            assert(selectedItem !== null);

            return (
              <PriceList price={selectedItem.price} name={selectedItem.name} />
            );
          })}
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
            Total: $
            {this.props.selected
              .map((id, i) => {
                if (id < 0) {
                  return 0;
                }
                const selectedItem = this.state["category" + (i + 1)][id];
                assert(selectedItem !== null);

                return selectedItem.price;
              })
              .reduce((a, b) => a + b, 0)}
          </Heading>
          <Link to="/cart">
            <BBButton />
          </Link>
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BundleDetailsPage);
