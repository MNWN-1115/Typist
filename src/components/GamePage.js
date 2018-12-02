import React from 'react';
import GameDisplay from './subComponents/GameDisplay';
import StatsBar from './subComponents/StatsBar';

const GamePage = ({ mode, words, keyStroke, curWord, score }) => {
    return (
        <div id='gameDisplay' tabIndex="-1" onKeyDown={e => keyStroke(e)}>
            <StatsBar mode={mode} score={score}/>
            <GameDisplay words={words}/>
            <p>{curWord}</p>
        </div>
    )
};

export default GamePage;
