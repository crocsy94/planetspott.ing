import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Admin from '../admin/admin';
import Blog from '../blog/blog';

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/admin" component={Admin} />
          <Route path="/blog" component={Blog} />
        </div>
      </BrowserRouter>
    );
  }
};

export default Router;