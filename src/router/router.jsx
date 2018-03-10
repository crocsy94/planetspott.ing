import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Admin from '../admin/admin';
import Article from '../article/article';
import Blog from '../blog/blog';

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/admin" component={Admin} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id" component={Article} />
        </Fragment>
      </BrowserRouter>
    );
  }
};

export default Router;