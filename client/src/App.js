import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BundlesPage } from "./pages/BundlesPage";
import { BundleDetailsPage } from "./pages/BundleDetailsPage";
import { HomePage } from "./pages/HomePage";
import { category1, category2, category3 } from "./resources";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category1: category1,
      category2: category2,
      category3: category3
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/bundles">
              <BundlesPage />
            </Route>
            <Route exact path="/bundles/1234">
              <BundleDetailsPage
                category1={this.state.category1}
                category2={this.state.category2}
                category3={this.state.category3}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
