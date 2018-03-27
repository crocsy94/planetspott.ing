import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
import styled from 'styled-components';
import introVideo from '../../assets/intro.mp4';
import Content from './content/content';

const Background = styled.div`
  position: relative;
  width: inherit;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteLayer = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

class Header extends Component {
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
      autoPlay: 'loop',
    };

    return (
      <Background>
        <Content />
        <WhiteLayer /> 
        <VideoCover
          videoOptions={videoOptions}
        />
      </Background>
    );
  }
}

export default Header;