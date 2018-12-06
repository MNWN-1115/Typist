import React from 'react';

const ScorePage = ({ onClick, score }) => {
    return (
        <div className='scores'>
            <h1>game over <br/> <h2>You Scored <br/> {score} pts! </h2></h1>
            <button onClick={onClick}>New Game</button>
        </div>
    )
};

export default ScorePage;
