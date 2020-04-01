import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TodayPage from "./TodayPage/TodayPage";
import ResultsPage from "./ResultsPage/ResultsPage";
import CombinationPage from "./CombinationsPage/CombinationPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/today" exact component={TodayPage} />
          <Route path="/combinations" exact component={CombinationPage} />
          <Route path="/results" exact component={ResultsPage} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
