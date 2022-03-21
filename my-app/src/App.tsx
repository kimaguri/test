// @ts-nocheck
import React, {useState} from 'react';
import './App.css';
import Cell from "./components/Cell";

const board = {
    shipTypes: {
        carrier: {size: 5, count: 1},
        battleship: {size: 4, count: 1},
        cruiser: {size: 3, count: 1},
        destroyer: {size: 2, count: 1},
        submarine:
            {
                size: 3,
                count: 1
            }
    },
    layout: [
        {ship: "carrier", positions: [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]]},
        {ship: "battleship", positions: [[5, 2], [5, 3], [5, 4], [5, 5]]},
        {ship: "cruiser", positions: [[8, 1], [8, 2], [8, 3]]},
        {ship: "submarine", positions: [[3, 0], [3, 1], [3, 2]]},
        {ship: "destroyer", positions: [[0, 0], [1, 0]]}
    ]
}

function buildInitialFieldState() {
    const state = new Array(10).fill(null).map(() => new Array(10).fill(null).map(() => ({})));

    for (let i = 0; i < board.layout.length; i++) {

        const item = board.layout[i]

        for (let j = 0; j < item.positions.length; j++) {
            let position = item.positions[j]
            state[position[0]][position[1]].shipIndex = i;
        }

    }

    return state;
}

function App() {

    const [field, setField] = useState(() => buildInitialFieldState())



  return (
    <div className="App">
        {
            field.map((row, rowIndex) => {
                return <div>
                    {
                        row.map((cell, cellIndex) => (
                            <Cell onClick={() => {
                                const newField = [...field]
                                const newRow = [...field[rowIndex]]
                                newRow[cellIndex] = {
                                    ...newRow[cellIndex], touched: true
                                }
                                newField[rowIndex] = newRow
                                setField(newField)
                            }} field={field} cell={cell} ships={board.layout} />
                        ))
                    }
                </div>
            })
        }
    </div>
  );
}

export default App;
