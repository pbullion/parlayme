import React from "react";
import HomePage from "./Background";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <HomePage />}</MyContext.Consumer>
);
