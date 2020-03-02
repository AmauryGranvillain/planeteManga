import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Container from './Container';

class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    const stylesheet = document.createElement("link");

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0/antd.min.js";
    script.async = true;

    stylesheet.href = "https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.0/antd.css";
    stylesheet.rel = "stylesheet";
    stylesheet.async = true;

    document.body.appendChild(stylesheet);
    document.body.appendChild(script);
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


