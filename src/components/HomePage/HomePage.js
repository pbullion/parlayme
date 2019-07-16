import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

const linkStyle = {
  width: 500,
  margin: 25
};

class HomePage extends Component {
  state = {};

  componentWillMount() {}

  render() {
    return (
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
      >

      </Container>
    );
  }
}

export default HomePage;
