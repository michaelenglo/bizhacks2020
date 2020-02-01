import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BundlesPage } from "./pages/BundlesPage";
import { BundleDetailsPage } from "./pages/BundleDetailsPage";
import { HomePage } from "./pages/HomePage";

function App() {
  constuctor(props) {
    super(props);

    this.state = {

    };
  }

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
            <BundleDetailsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
