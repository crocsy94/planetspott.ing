import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './header/header';
import Intro from './intro/intro';
import Timeline from './timeline/timeline';
import background from '../assets/background.jpg';

const Background = styled.div`
  background-image: url(${background});
  height: fit-content;
`;

class Blog extends Component {

  render() {
    return (
      <Background>
        <Header />
        <Intro />
        <Timeline />
      </Background>
    );
  }
}

export default Blog;