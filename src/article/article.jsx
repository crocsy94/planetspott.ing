import React, { Component } from 'react';
import style from 'styled-components';
import article from '../stub/blog_detail.json';

const styles = {
  hover_margin: "30px"
}

const Title = style.h2`
  color: ${props => props.theme.title_color};
  font-family: ${props => props.theme.default_font};
`;

const Container = style.div`
  position: absolute;
  top: ${styles.hover_margin};
  bottom: ${styles.hover_margin};
  left: ${styles.hover_margin};
  right: ${styles.hover_margin};
  background-color: ${props => props.theme.background_color}
`

class Article extends Component {
  render() {
    return (
      <Container>
        <Title>{article.title}</Title>
      </Container>
      
    );
  }
}

export default Article;