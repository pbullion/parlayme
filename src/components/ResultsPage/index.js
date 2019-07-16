import React from "react";
import ResultsPage from "./ResultsPage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <ResultsPage />}</MyContext.Consumer>
);
