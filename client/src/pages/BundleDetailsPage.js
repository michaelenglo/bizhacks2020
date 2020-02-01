import React, { Component } from "react";
import PropTypes from "prop-types";
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
import Headline from "./Headline";
import ProductDetailsRow from "../components/ProductDetailsRow";
import BBButton from "../components/BBButton";
import Divider from "../Divider";

export class BundleDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ["0", "1", "4"]
    };
  }

  render() {
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
            <ProductDetailsCard
              title="100"
              selected={this.state.selected[0] === "0"}
              ratings={3}
              editorNote="Best bang for buck"
              noOfReviews={100}
              url="/pics/monitor0.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              editorNote="Good portability"
              noOfReviews={100}
              url="/pics/monitor1.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              editorNote="Most endurant"
              noOfReviews={100}
              url="/pics/monitor2.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              editorNote="Best Large screen"
              noOfReviews={100}
              url="/pics/monitor3.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              editorNote="Best all rounder"
              noOfReviews={100}
              url="/pics/monitor4.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              editorNote="Best "
              noOfReviews={100}
              url="/pics/monitor5.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              editorNote="Easy to Assemble"
              noOfReviews={100}
              url="/pics/monitor6.png"
            />
          </ProductDetailsRow>

          <ProductDetailsRow>
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor0.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor1.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor2.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor3.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor4.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor5.png"
            />
            <ProductDetailsCard
              title="100"
              ratings={3}
              noOfReviews={100}
              url="/pics/monitor6.png"
            />
          </ProductDetailsRow>
        </Pane>

        <Pane
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          paddingY="20px"
          paddingX="50px"
        >
          <Pane display="flex" paddingLeft="50%" marginTop="10px" width="100%" justifyContent="space-between" flexDirection="row">
            <Heading>1 x ITEem</Heading>
            <Heading>$10.00</Heading>
          </Pane>
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
