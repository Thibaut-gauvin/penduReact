import React, { Component } from 'react'
import './Game.css'

import Board from './Board'
import HumanFrame from './HumanFrame'
import KeyBoard from './KeyBoard'

class Game extends Component {
    render () {
        return (
            <div className="game">
                <Board />
                <HumanFrame />
                <KeyBoard />
            </div>
        )
    }
}

export default Game
