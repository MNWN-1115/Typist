import React from 'react';
import GameDisplayFigure from './GameDisplayFigure';

const GameDisplay = ({ words }) => {
    const display = words.map((word, i) => 
    <GameDisplayFigure display={word[0]} left={word[1]} top={word[2]} key={i}/>);
    return (
        <div>
        {display}
        </div>
    )
};

export default GameDisplay;
