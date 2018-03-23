import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      /* 
      this is used when serving your app from a subdirectory
      e.g http://localhost/my-app/posts  
      <BrowserRouter basename="/my-app">
      */
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
