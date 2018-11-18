import React from 'react';

const GameDisplayFigure = ({ display, left, top}) => {
    return (
        <p style={{
            backgroundColor: 'Blue',
            position: 'absolute',
            marginLeft: `${left}px`,
            marginTop: `${top}px`,
            fontSize: '50px'
        }}>
        {display}
        </p>
    );
};

export default GameDisplayFigure;
