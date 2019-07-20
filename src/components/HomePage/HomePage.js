import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";

const linkStyle = {
  width: 500,
  margin: 25
};

class HomePage extends Component {
  state = {};

  componentWillMount() {}

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            color: "#ffffff"
          }}
          fluid
        />
      </Fragment>
    );
  }
}

export default HomePage;
