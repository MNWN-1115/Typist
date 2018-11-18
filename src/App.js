import React, { Component } from 'react';
import MainPage from '../src/components/MainPage';
import GamePage from '../src/components/GamePage';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameMode: '',
      curWords: [['h', 100, 100]],
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleGameLogic = this.handleGameLogic.bind(this);
  };

  handleButtonClick(e) {
    setInterval(this.handleGameLogic, 2000)
    this.setState({
      gameMode: e.target.value
    })
  }

  fetchNewWord() {
    let wordList = ['word1', 'word2', 'word3', 'word4', 'word5']
    return wordList[Math.round(Math.random() * (wordList.length - 1))]
  }

  handleGameLogic() {
    console.log('hello')
    let word = this.fetchNewWord();
    let top = Math.round(Math.random() * 500);
    let left = Math.round(Math.random() * 1000);
    this.setState({
      curWords: [...this.state.curWords, [word, top, left]]
    })
  }
  render() {
    let currentPage = this.state.gameMode === '' ? 
    <MainPage handleClick={this.handleButtonClick}/> : 
    <GamePage mode={this.state.gameMode} words={this.state.curWords}/>;
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
