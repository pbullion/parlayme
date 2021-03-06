import React, {Component, Fragment} from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "./TodayPage.css";
import * as moment from "moment";
import NavBar from "../NavBar/NavBar";

class TodayPage extends Component {
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
      "OAK",
      "BOS",
      "CLE",
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
                <Col xs={12} sm={8}>
                  <table className="table">
                    <thead>
                    <tr>
                      <th scope="col">Teams</th>
                      <th scope="col">Win</th>
                      <th scope="col">Loss</th>
                      <th scope="col">%</th>
                      <th scope="col">Points</th>
                      <th scope="col">Pitcher</th>
                      <th scope="col">Pitcher Wins</th>
                      <th scope="col">Pitcher Losses</th>
                      <th scope="col">Pitcher %</th>
                      <th scope="col">Pitcher Points</th>
                      <th scope="col">TOTALS</th>
                      <th scope="col">Difference</th>
                      <th scope="col">Score</th>
                      <th scope="col">Inning</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.games
                        ? this.state.games.map((game, index) => {
                          let color = "";
                          if (
                              game.awayTeam.totalPoints > game.homeTeam.totalPoints
                          ) {
                            let difference =
                                game.awayTeam.totalPoints -
                                game.homeTeam.totalPoints;
                            if (difference >= 10) {
                              color = "#32e50a";
                            }
                            if (difference < 10 && difference >= 9) {
                              color = "#dae506";
                            }
                            if (difference < 9) {
                              color = "#e50006";
                            }
                          }
                          if (
                              game.homeTeam.totalPoints > game.awayTeam.totalPoints
                          ) {
                            let difference =
                                game.homeTeam.totalPoints -
                                game.awayTeam.totalPoints;
                            if (difference >= 10) {
                              color = "#32e50a";
                            }
                            if (difference < 10 && difference >= 9) {
                              color = "#dae506";
                            }
                            if (difference < 9) {
                              color = "#e50006";
                            }
                          }
                          if (
                              game.homeTeam.totalPoints ===
                              game.awayTeam.totalPoints
                          ) {
                            color = "#e50006";
                          }
                          return (
                              <tr key={index} style={{ backgroundColor: color }}>
                                <td>
                                  <p
                                      style={{
                                        fontWeight:
                                            game.awayTeam.pitcherPoints +
                                            game.awayTeam.teamPoints >
                                            game.homeTeam.pitcherPoints +
                                            game.homeTeam.teamPoints
                                                ? "bold"
                                                : null
                                      }}
                                  >
                                    {game.awayTeam.abbreviation}
                                  </p>
                                  <p
                                      style={{
                                        fontWeight:
                                            game.homeTeam.pitcherPoints +
                                            game.homeTeam.teamPoints >
                                            game.awayTeam.pitcherPoints +
                                            game.awayTeam.teamPoints
                                                ? "bold"
                                                : null
                                      }}
                                  >
                                    {game.homeTeam.abbreviation}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.teamStats.standings.wins
                                        ? null
                                        : game.awayTeam.teamStats.standings.wins}
                                  </p>
                                  <p>
                                    {game.homeTeam.teamStats.standings.wins
                                        ? game.homeTeam.teamStats.standings.wins
                                        : null}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {game.awayTeam.teamStats.standings.losses
                                        ? game.awayTeam.teamStats.standings.losses
                                        : null}
                                  </p>
                                  <p>
                                    {game.homeTeam.teamStats.standings.losses
                                        ? game.homeTeam.teamStats.standings.losses
                                        : null}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {game.awayTeam.teamStats.standings.winPct
                                        ? game.awayTeam.teamStats.standings.winPct
                                        : null}
                                  </p>
                                  <p>
                                    {game.homeTeam.teamStats.standings.winPct
                                        ? game.homeTeam.teamStats.standings.winPct
                                        : null}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {game.awayTeam.teamPoints
                                        ? game.awayTeam.teamPoints
                                        : null}
                                  </p>
                                  <p>
                                    {game.homeTeam.teamPoints
                                        ? game.homeTeam.teamPoints
                                        : null}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.pitcher[0].player
                                        ? null
                                        : game.awayTeam.pitcher[0].player.lastName}
                                  </p>
                                  <p>
                                    {!game.homeTeam.pitcher[0].player
                                        ? null
                                        : game.homeTeam.pitcher[0].player.lastName}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.pitcher[0].stats
                                        ? 0
                                        : game.awayTeam.pitcher[0].stats.wins}
                                  </p>
                                  <p>
                                    {!game.homeTeam.pitcher[0].stats
                                        ? 0
                                        : game.homeTeam.pitcher[0].stats.wins}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.pitcher[0].stats
                                        ? 0
                                        : game.awayTeam.pitcher[0].stats.losses}
                                  </p>
                                  <p>
                                    {!game.homeTeam.pitcher[0].stats
                                        ? 0
                                        : game.homeTeam.pitcher[0].stats.losses}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.pitcher[0].stats
                                        ? 0
                                        : game.awayTeam.pitcher[0].stats.winPct}
                                  </p>
                                  <p>
                                    {!game.homeTeam.pitcher[0].stats
                                        ? 0
                                        : game.homeTeam.pitcher[0].stats.winPct}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {game.awayTeam.pitcherPoints
                                        ? game.awayTeam.pitcherPoints
                                        : 0}
                                  </p>
                                  <p>
                                    {game.homeTeam.pitcherPoints
                                        ? game.homeTeam.pitcherPoints
                                        : 0}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>{game.awayTeam.totalPoints}</p>
                                  <p>{game.homeTeam.totalPoints}</p>
                                </td>
                                <td
                                    className="align-middle"
                                    style={{ fontWeight: "bold" }}
                                >
                                  <p>
                                    {game.awayTeam.pitcherPoints +
                                    game.awayTeam.teamPoints >
                                    game.homeTeam.pitcherPoints +
                                    game.homeTeam.teamPoints
                                        ? game.awayTeam.pitcherPoints +
                                        game.awayTeam.teamPoints -
                                        (game.homeTeam.pitcherPoints +
                                            game.homeTeam.teamPoints)
                                        : game.homeTeam.pitcherPoints +
                                        game.homeTeam.teamPoints -
                                        (game.awayTeam.pitcherPoints +
                                            game.awayTeam.teamPoints)}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.score[0].score.awayScoreTotal
                                        ? 0
                                        : game.awayTeam.score[0].score.awayScoreTotal}
                                  </p>
                                  <p>
                                    {!game.homeTeam.score[0].score.homeScoreTotal
                                        ? 0
                                        : game.homeTeam.score[0].score.homeScoreTotal}
                                  </p>
                                </td>
                                <td className="align-middle">
                                  <p>
                                    {!game.awayTeam.score[0].score.currentInning
                                        ? null : game.awayTeam.score[0].score.currentInningHalf}
                                  </p>
                                  <p>
                                    {!game.awayTeam.score[0].score.currentInning
                                        ? moment(game.awayTeam.score[0].schedule.startTime).format("h:mm A")
                                        : game.awayTeam.score[0].score.currentInning}
                                  </p>
                                </td>
                              </tr>
                          );
                        })
                        : null}
                    </tbody>
                  </table>
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

export default TodayPage;
