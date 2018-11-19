import React, { Component } from 'react';
import MainPage from '../src/components/MainPage';
import GamePage from '../src/components/GamePage';
import ScorePage from '../src/components/ScorePage';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameMode: '',
      curWords: [['', 100, 100]],
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleGameLogic = this.handleGameLogic.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  handleKeyPress(e) {
    console.log(e.key)
  }

  handleButtonClick(e) {
    let interval = setInterval(() => this.handleGameLogic(interval), 1000)
    this.setState({
      gameMode: e.target.value,
    })
  }

  fetchNewWord() {
    let wordList = ['word1', 'word2', 'word3', 'word4', 'word5']
    return wordList[Math.round(Math.random() * (wordList.length - 1))]
  }

  handleGameLogic(interval) {
    document.getElementById('gameDisplay').focus();
    if (this.state.curWords.length > 10) {
      this.setState({
        gameMode: 'game over',
      })
      clearInterval(interval);
    }
    let word = this.fetchNewWord();
    let top = Math.round(Math.random() * 500);
    let left = Math.round(Math.random() * 650);
    this.setState({
      curWords: [...this.state.curWords, [word, left, top]]
    })
  }

  render() {
    let currentPage = ''
    if (this.state.gameMode === '') {
      currentPage = <MainPage handleClick={this.handleButtonClick}/>;
    } else if (this.state.gameMode === 'game over') {
      currentPage = <ScorePage />;
    } else {
      currentPage = <GamePage mode={this.state.gameMode} words={this.state.curWords} keyStroke={this.handleKeyPress}/>;
    }  
    
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
