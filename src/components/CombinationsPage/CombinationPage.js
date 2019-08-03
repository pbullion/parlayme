import React, { Component, Fragment } from "react";
import axios from "axios";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "./CombinationsPage.css";
import * as moment from "moment";
import NavBar from "../NavBar/NavBar";

class CombinationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoading: false,
      bettingGames: [],
      bettingGamesCombinations: [],
      today: moment()
        .utcOffset("-05:00")
        .format("dddd, MMMM Do YYYY")
    };
  }

  getCombinations(array) {
    let result = [];
    let f = function(prefix = [], array) {
      for (let i = 0; i < array.length; i++) {
        result.push([...prefix, array[i]]);
        f([...prefix, array[i]], array.slice(i + 1));
      }
    };
    f("", array);
    console.log(result);
    return result.sort(function(a, b) {
      // ASC  -> a.length - b.length
      // DESC -> b.length - a.length
      return b.length - a.length;
    });
  }

  getBettingGames() {
    let self = this;
    let difference = null;
    for (let i = 0; i < self.state.games.length; i++) {
      if (
        self.state.games[i].awayTeam.totalPoints >
        self.state.games[i].homeTeam.totalPoints
      ) {
        difference =
          self.state.games[i].awayTeam.totalPoints -
          self.state.games[i].homeTeam.totalPoints;
      }
      if (difference >= 9) {
        console.log(difference);
        console.log(self.state.games[i].awayTeam.abbreviation);
        self.state.bettingGames.push(self.state.games[i].awayTeam.abbreviation);
      }
      if (
        self.state.games[i].homeTeam.totalPoints >
        self.state.games[i].awayTeam.totalPoints
      ) {
        difference =
          self.state.games[i].homeTeam.totalPoints -
          self.state.games[i].awayTeam.totalPoints;
        if (difference >= 9) {
          self.state.bettingGames.push(
            self.state.games[i].homeTeam.abbreviation
          );
        }
      }
    }
    // self.getCombinations(self.state.bettingGames);
    return (self.state.bettingGamesCombinations = self.getCombinations([
      "LAD",
      "PHI",
      "MIN"
    ]));
  }

  listBetTeams(teams) {
    for (let i = 0; i < teams.length; i++) {}
  }

  componentWillMount() {
    let self = this;
    this.state.isLoading = true;
    axios({
      method: "get",
      url: `http://18.237.192.82:3008/dailygames`
    }).then(function(response) {
      self.state.games = response.data;
      self.getBettingGames();
      self.state.isLoading = false;
      console.log(self.state.bettingGamesCombinations);
      self.forceUpdate();
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <Fragment>
          <NavBar />
          <Container fluid>
            <Row>
              <h1>{this.state.today}</h1>
            </Row>
            <Row>
              {" "}
              <Col xs={12}>
                <h1>Combinations To Bet</h1>
                <h2>Updated August 3, 2019</h2>
                {this.state.bettingGamesCombinations
                  ? this.state.bettingGamesCombinations.map((bet, index) => {
                      return (
                        <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center"
                            }}>
                          <FormCheck />
                          <ul key={index}>
                            {bet.map((item, index) => {
                              return (
                                <li style={{ listStyle: "none" }} key={index}>
                                  {item}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })
                  : null}
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <NavBar />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 300,
              width: "100%"
            }}
          >
            <Row>
              <Col xs={12}>
                <h1>Loading, chill tf out.</h1>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Loader
                  type="CradleLoader"
                  color="#00BFFF"
                  height={600}
                  width={600}
                />
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default CombinationPage;
