import React, { Component } from 'react'
import './Game.css'

import Counter from './Counter'
import MysteryWord from './MysteryWord'
import HumanFrame from './HumanFrame'
import KeyBoard from './KeyBoard'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

class Game extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mysteryWord: Game.generateMysteryWord(),
            letters: Game.generateLetters(),
            playerTry: 0,
        }
    }

    static generateLetters () {
        return ALPHABET.split("").map((letter) =>{
            return {
                letter: letter,
                tested: false
            };
        })
    }

    static generateMysteryWord () {
        let mysteryWord = 'crocrodile'

        return mysteryWord.split("")
    }

    handleLetterClick = (letter) => {
        const { playerTry, letters } = this.state
        const letterIndex = letters.findIndex((obj => obj.letter === letter))

        letters[letterIndex].tested = true
        this.setState({
            playerTry: playerTry + 1,
            letters: letters
        })
    }

    render () {
        const { letters, playerTry, mysteryWord } = this.state
        const testedLetters = letters.map(({letter, tested}) => {
            return tested ? letter : null
        })

        // const won = mysteryWord.length === mysteryWord.filter(letter => (testedLetters.includes(letter))).length

        return (
            <div className="game">
                <div className="board">
                    <Counter playerTry={playerTry} />
                    <MysteryWord
                        mysteryWord={mysteryWord}
                        gameLetters={letters}
                    />
                </div>

                <HumanFrame playerTry={playerTry} />

                <KeyBoard
                    letters={letters}
                    onClick={this.handleLetterClick}
                />
            </div>
        )
    }
}

export default Game
