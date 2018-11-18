import React from 'react';
import GameDisplay from './subComponents/GameDisplay';
import StatsBar from './subComponents/StatsBar';

const GamePage = ({ mode }) => {
    return (
        <div>
            <StatsBar mode={mode}/>
            <GameDisplay />
        </div>
    )
};

export default GamePage;
