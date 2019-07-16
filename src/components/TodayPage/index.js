import React from "react";
import TodayPage from "./TodayPage";
import { MyContext } from "../../contexts/MyContext";

export default () => (
  <MyContext.Consumer>{() => <TodayPage />}</MyContext.Consumer>
);
