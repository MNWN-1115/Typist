import React from 'react';

const StatsBar = ({ mode, score }) => {
    return (
        <div> Difficulty: {mode} | Score: {score}</div>
    )
};

export default StatsBar;
