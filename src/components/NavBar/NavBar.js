import React, { Component } from "react";
import { Container, Col, Row, Navbar, Nav, Form, Button, NavDropdown, FormControl } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const linkStyle = {
  width: 500,
  margin: 25
};

class NavBar extends Component {
  state = {};

  componentWillMount() {}

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Parlay Me, Please</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to={'/today'}>Today's Games</Link></Nav.Link>
            <Nav.Link><Link to={'/combinations'}>Today's Combinations</Link></Nav.Link>
            <Nav.Link><Link to={'/results'}>Betting Results</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
