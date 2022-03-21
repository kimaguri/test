// @ts-nocheck
import React from 'react';
import './Cell.css'

const Cell = ({ cell, ships, field, onClick }) => {

    if (!cell.touched || cell.shipIndex == null) {
        return <div onClick={onClick} className={`cell`}></div>
    }

    for (let i = 0; i < ships[cell.shipIndex].positions.length; i++) {
        const position = ships[cell.shipIndex].positions[i]
        const x = position[0]
        const y = position[1]


        if (!field[x][y].touched) {
            return <div onClick={onClick} className={`cell cell-hitted`}></div>
        }
    }

    return (
        <div onClick={onClick} className={`cell cell-dead`}>
        </div>
    );
};

export default Cell;
