import React, { Component } from 'react'
import './Board.css'
import Counter from './Counter'
import MysteryWord from './MysteryWord'

class Board extends Component {
    render () {
        return (
            <div className="board">
                <Counter />

                <MysteryWord />
            </div>
        )
    }
}

export default Board
