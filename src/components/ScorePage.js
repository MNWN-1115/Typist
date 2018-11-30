import React from 'react';

const ScorePage = ({ onClick }) => {
    return (
        <div className='scores'>
            <p>game over</p>
            <button onClick={onClick}>New Game</button>
        </div>
    )
};

export default ScorePage;
