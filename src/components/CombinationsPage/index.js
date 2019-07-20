import React from "react";
import CombinationPage from "./CombinationPage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <CombinationPage />}</MyContext.Consumer>
);
