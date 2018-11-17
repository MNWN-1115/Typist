import React, { Component } from 'react';
import MainPage from '../src/components/MainPage';
import GamePage from '../src/components/GamePage';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameMode: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };

  handleButtonClick(e) {
    this.setState({
      gameMode: e.target.value
    })
  }

  render() {
    let currentPage = this.state.gameMode === '' ? 
    <MainPage handleClick={this.handleButtonClick}/> : 
    <GamePage mode={this.state.gameMode}/>;
    return (
      <div className="App">
        <header className="App-header">
        {currentPage}
        </header>
      </div>
    );
  }
}

export default App;
