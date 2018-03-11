import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
import styled from 'styled-components';
import introVideo from '../../assets/intro.mp4';

const Background = styled.div`
  position: relative;
  width: inherit;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutUs = styled.div`
  position: absolute;
  background-color: white;
  opacity: 0.3;
  width: 70%;
  height: 200px;
  margin: auto;
  border-radius: 10px;
  padding: 15px;
`;

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const videoOptions = {
      src: introVideo,
      ref: videoRef => {
        this.videoRef = videoRef;
      },
      onClick: () => {
        if (this.videoRef && this.videoRef.paused) {
          this.videoRef.play();
        } else if (this.videoRef) {
          this.videoRef.pause();
        }
      },
      title: 'Click to play/pause',
      autoPlay: 'loop',
    };

    return (
      <Background>
        <AboutUs>WHO WE ARE?</AboutUs>
        <VideoCover
          videoOptions={videoOptions}
        />
      </Background>
    );
  }
}

export default Intro;