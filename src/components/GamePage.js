import React from 'react';
import GameDisplay from './subComponents/GameDisplay';
import StatsBar from './subComponents/StatsBar';

const GamePage = ({ mode, words }) => {
    return (
        <div>
            <StatsBar mode={mode}/>
            <GameDisplay words={words}/>
        </div>
    )
};

export default GamePage;
