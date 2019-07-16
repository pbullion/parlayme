import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ResultsPage.css";

// PICS
import june30 from "./results/06302019.png";
import july02 from "./results/07022019.png";
import july03 from "./results/07032019.png";
import july04 from "./results/07042019.png";
import july05 from "./results/07052019.png";
import july06 from "./results/07062019.png";
import july07 from "./results/07072019.png";
import july12 from "./results/07122019.png";
import july13 from "./results/07132019.png";
import july14 from "./results/07142019.png";
import july15 from "./results/07152019.png";

class ResultsPage extends Component {
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
          color: "#000000",

          paddingTop: 50
        }}
      >
        <Col xs={12} style={{ marginBottom: 20 }}>
          <h1>RUNNING TOTAL</h1>
          <h1 style={{ color: "#25d412", fontSize: 50 }}>$489</h1>
        </Col>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july15} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/15/2019</h5>
            <h5>Rrecord: 2-3</h5>
            <h5>
              Money: <font color="red"> -35</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july14} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/14/2019</h5>
            <h5>Record: 2-2</h5>
            <h5>
              Money: <font color="#25d412">39</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july13} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/13/2019</h5>
            <h5>Record: 1-2</h5>
            <h5>
              Money: <font color="red">-15</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july12} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/12/2019</h5>
            <h5>Record: 2-2</h5>
            <h5>
              Money: <font color="#25d412">52</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h5 style={{ textAlign: "center" }}>All-Star Break</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july07} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/07/2019</h5>
            <h5>Record: 4-4</h5>
            <h5>
              Money: <font color="#25d412">309</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july06} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/06/2019</h5>
            <h5>Record: 2-3</h5>
            <h5>
              Money: <font color="red">-38</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july05} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/05/2019</h5>
            <h5>Record: 2-3</h5>
            <h5>
              Money: <font color="red">-12</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july04} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/04/2019</h5>
            <h5>Record: 3-4</h5>
            <h5>
              Money: <font color="#25d412">19</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july03} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/03/2019</h5>
            <h5>Record: 3-3</h5>
            <h5>
              Money: <font color="#25d412">91</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={july02} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 07/02/2019</h5>
            <h5>Record: 3-3</h5>
            <h5>
              Money: <font color="#25d412">82</font>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <img className="team" src={june30} />
          </Col>
          <Col xs={12} sm={6}>
            <h5>Date: 06/30/2019</h5>
            <h5>Record: 2-3</h5>
            <h5>
              Money: <font color="red">-3</font>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ResultsPage;
