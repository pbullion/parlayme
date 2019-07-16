import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cover from "react-video-cover";
import video1 from "../../media/backgroundvideos/snowboardingbackground1.mp4";
import video2 from "../../media/backgroundvideos/snowboardingbackground2.mp4";
import video3 from "../../media/backgroundvideos/snowboardingbackground3.mp4";
import video4 from "../../media/backgroundvideos/snowboardingbackground4.mp4";
import video5 from "../../media/backgroundvideos/snowboardingbackground5.mp4";
import backgroundPic from "../../media/breck1.jpg";
import "./Background.css";

const style = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0.6,
  zIndex: -2
};

const style2 = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
  opacity: 0.5,
  backgroundColor: "#000000"
};

const picStyle = {};

class Background extends Component {
  state = {
    videos: [video1, video2, video3, video4, video5]
  };

  componentWillMount() {}

  render() {
    const videoOptions = {
      src: this.state.videos[Math.floor(Math.random() * 4 + 1)],
      autoPlay: true,
      muted: true,
      loop: true
    };

    return (
      <Container fluid style={{ padding: 0 }}>
        {/*<div style={style2}></div>*/}
        <div id="backgroundPic">
          {/*<Cover*/}
          {/*  videoOptions={videoOptions}*/}
          {/*  remeasureOnWindowResize*/}
          {/*  getResizeNotifier={resizeNotifier => {*/}
          {/*    this.setState({*/}
          {/*      resizeNotifier*/}
          {/*    });*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
      </Container>
    );
  }
}

export default Background;
