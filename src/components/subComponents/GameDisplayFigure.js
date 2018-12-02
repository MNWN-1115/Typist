import React from 'react';

const GameDisplayFigure = ({ display, left, top}) => {
    return (
        <div className='wordDisplay' style={{
            marginLeft: `${left}%`,
            marginTop: `${top}%`,
        }}>
        {display}
        </div>
    );
};

export default GameDisplayFigure;
