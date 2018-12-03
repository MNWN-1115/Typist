import React, { Component } from 'react';
import MainPage from '../src/components/MainPage';
import GamePage from '../src/components/GamePage';
import ScorePage from '../src/components/ScorePage';
import wordsList from './helpers/dictionary';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameMode: '',
      curWords: [['', 100, 100]],
      curTypedWord: '',
      score: 0,
    };
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGameLogic = this.handleGameLogic.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  };

  handleKeyPress(e) {
    if (e.key === 'Backspace') {
      this.setState({
        curTypedWord: this.state.curTypedWord.substring(0, this.state.curTypedWord.length - 1)
      });
    } else {
      this.setState({
        curTypedWord: this.state.curTypedWord + e.key
      });
    }
    this.handleWordRemoval(e.key);
  }

  handleWordRemoval (key) {
    let newWordsList = [];
    let word = this.state.curTypedWord + key;
    let wordMatched = false;
    for (let i = 0; i < this.state.curWords.length; i++) {
      if (word === this.state.curWords[i][0] && word !== '') {
        wordMatched = true;
      } else {
        newWordsList.push(this.state.curWords[i]);
      }
    }

    if (wordMatched) {
      this.setState({
        score: this.state.score + 1,
        curTypedWord: '',
        curWords: newWordsList,
      })
    }
  }

  handleGameStart(e) {
    let speed = 2000;
    if (e.target.value === 'medium') speed = 1500;
    if (e.target.value === 'hard') speed = 1000;
    let interval = setInterval(() => this.handleGameLogic(interval), speed)
    this.setState({
      gameMode: e.target.value,
    })
  }

  fetchNewWord() {
    return wordsList[Math.round(Math.random() * (wordsList.length - 1))]
  }

  handleRestart(e) {
    this.setState({
      gameMode: '',
      curWords: [['', 100, 100]],
      curTypedWord: '',
      score: 0,
    })
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
    let top = Math.round(Math.random() * 40) + 2;
    let left = Math.round(Math.random() * 85);
    this.setState({
      curWords: [...this.state.curWords, [word, left, top]]
    })
  }

  render() {
    let currentPage = ''
    if (this.state.gameMode === '') {
      currentPage = <MainPage id='MainPage' handleClick={this.handleGameStart}/>;
    } else if (this.state.gameMode === 'game over') {
      currentPage = <ScorePage id='ScorePage' onClick={this.handleRestart}/>;
    } else {
      currentPage = <GamePage 
        id='GamePage' 
        mode={this.state.gameMode} 
        words={this.state.curWords} 
        curWord={this.state.curTypedWord} 
        keyStroke={this.handleKeyPress}
        score={this.state.score}/>;
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
