import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Band from "./Band";
import Resume from "./Resume";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/resume" exact component={Resume} />
          <Route path="/band" exact component={Band} />
          <Route path="/" exact component={Home} />
        </Fragment>
      </Router>
    );
  }
}
