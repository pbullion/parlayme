import React from "react";
import NavBar from "./NavBar";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <NavBar />}</MyContext.Consumer>
);
