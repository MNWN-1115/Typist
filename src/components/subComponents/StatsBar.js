import React from 'react';

const StatsBar = ({ mode, score, word }) => {
    return (
        <div> 
            <p>Difficulty: {mode} | Score: {score}</p>
            <p id='typedWordHeader'>Typed Word : {word}</p>
        </div>
    )
};

export default StatsBar;
