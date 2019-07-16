import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TodayPage from "./TodayPage/TodayPage";
import ResultsPage from "./ResultsPage/ResultsPage";

class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/" exact component={TodayPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/results" exact component={ResultsPage} />
        </Router>
    );
  }
}

export default App;
