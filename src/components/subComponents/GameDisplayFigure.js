import React from 'react';

const GameDisplayFigure = ({ display, left, top}) => {
    return (
        <div className='wordDisplay' style={{
            backgroundColor: 'Blue',
            position: 'absolute',
            marginLeft: `${left}%`,
            marginTop: `${top}%`,
            fontSize: '50px'
        }}>
        {display}
        </div>
    );
};

export default GameDisplayFigure;
