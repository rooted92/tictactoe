import React from 'react';
import './Square.css';

const Square = ({ value, onSquareClick, changeBGColor }) => {
    // console.log(`Spy Image in Square Component ${changeBG}`);
    return (
        <button
            className='square'
            style={{backgroundColor: changeBGColor}}
            onClick={onSquareClick}
        >{value}</button>
    )
}

export default Square;