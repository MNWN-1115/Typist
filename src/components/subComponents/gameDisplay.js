import React from 'react';
import GameDisplayFigure from './GameDisplayFigure';

const GameDisplay = ({ words }) => {
    const display = words.map((word, i) => <GameDisplayFigure display={word[0]} left={word[1]} top={word[2]} key={i}/>);
    return (
        <div style={{
            backgroundColor: 'Yellow', 
            width: '800px', 
            height: '600px',
            border: '2px solid green'
        }}>
        {display}
        </div>
    )
};

export default GameDisplay;
