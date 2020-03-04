import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Container from './Container';

class App extends Component {

  componentDidMount() {
    const stylesheet = document.createElement("link");

    stylesheet.href = "https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0/antd.css";
    stylesheet.rel = "stylesheet";
    stylesheet.async = true;

    document.body.appendChild(stylesheet);
  }

  render() {
    return (
      <Router>
        <div>
          <Container />
        </div>
      </Router>
    )
  }
}

export default App;


