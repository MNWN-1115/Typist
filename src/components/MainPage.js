import React from 'react';

const MainPage = () => {
  return (
    <div>
      <h1>Typist</h1>
      <p>Score as many points as you acn by typing the word before the growing shape pops!</p>
      <h2>Game over after 10 missed shapes!</h2>
      <h2>Select difficulty:</h2>
      <div>
        <button>Take it easy</button>
        <button>Good at typing</button>
        <button>Challenge me</button>
      </div>
    </div>
  );
};

export default MainPage;