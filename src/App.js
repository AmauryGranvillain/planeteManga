import React, {Component} from 'react';
import './App.css';
import MangaItem, { LIST_MANGA } from './mangaItem';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MangaItem entries={LIST_MANGA}/>
      </div>
    );
  }
}

export default App
