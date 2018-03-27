import React, { Component } from 'react';
import styled from 'styled-components';

// import Header from './header/header';
// import Intro from './intro/intro';
import Header from './header/header';
import Timeline from './timeline/timeline';
import background from '../assets/background.jpg';

const Background = styled.div`
  background-image: url(${background});
  padding: 1px;
`;

class Blog extends Component {

  render() {
    return (
      <div>
        {/* <Header />
        <Intro /> */}
        <Header />
        <Background>
          <Timeline />
        </Background>
      </div>
    );
  }
}

export default Blog;