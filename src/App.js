import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Container from './Container';

class App extends Component{
  render(){
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


