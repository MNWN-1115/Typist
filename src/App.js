import React, { Component } from 'react';
import MainPage from '../src/components/MainPage';
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
    return (
      <div className="App">
        <header className="App-header">
          <MainPage handleClick={this.handleButtonClick}/>
        </header>
      </div>
    );
  }
}

export default App;
