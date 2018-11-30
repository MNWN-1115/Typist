import React from 'react';
import GameDisplay from './subComponents/GameDisplay';
import StatsBar from './subComponents/StatsBar';

const GamePage = ({ mode, words, keyStroke }) => {
    return (
        <div id='gameDisplay' tabIndex="-1" onKeyDown={e => keyStroke(e)}>
            <StatsBar mode={mode}/>
            <GameDisplay words={words}/>
        </div>
    )
};

export default GamePage;
