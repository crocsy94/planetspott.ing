import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './navbar/navbar';
import Header from './header/header';
import background from '../assets/background.jpg';
//only needed for dev
import data from '../stub/blog_list.json';

const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
`;

var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

class Blog extends Component {
  navbarData(data) {
    var monthIds = data.map((blogPost) => {
      return new Date(blogPost.date).getMonth();
    })
    var sortedArray = Array.from(new Set(monthIds.sort((a, b) => {return b-a})))
    var months = sortedArray.map((id) => {
      return monthArray[id]
    });
    return months;
  };

  render() {
    return (
      <Background>
        <Header />
        <Navbar months={this.navbarData(data)} />
      </Background>
    );
  }
}

export default Blog;