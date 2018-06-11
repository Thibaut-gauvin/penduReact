import React, { Component } from 'react'
import './Game.css'

import Counter from './Counter'
import MysteryWord from './MysteryWord'
import HumanFrame from './HumanFrame'
import KeyBoard from './KeyBoard'
import Score from './Score'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

class Game extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mysteryWord: Game.generateMysteryWord(),
            keyboardLetters: Game.generateLetters(),
            testedLetters: [],
            playerTry: 0
        }
    }

    static generateLetters () {
        return ALPHABET.split('').map((letter) => {
            return {
                letter: letter,
                tested: false
            }
        })
    }

    static generateMysteryWord () {
        const words = ['navigateur', 'tortue', 'poisson', 'saucisse', 'console', 'programmation', 'informatique']
        const mysteryWord = words[Math.floor(Math.random() * words.length)]

        return mysteryWord.split('')
    }

    handleLetterClick = (letter) => {
        const { playerTry, keyboardLetters, testedLetters } = this.state
        const letterIndex = keyboardLetters.findIndex(obj => obj.letter === letter)

        keyboardLetters[letterIndex].tested = true
        testedLetters.push(letter)

        this.setState({
            playerTry: playerTry + 1,
            keyboardLetters: keyboardLetters,
            testedLetters: testedLetters
        })
    }

    handleNewGameClick = () => {
        const newMysteryWord = Game.generateMysteryWord()
        this.setState({
            mysteryWord: newMysteryWord,
            keyboardLetters: Game.generateLetters(),
            testedLetters: [],
            playerTry: 0
        })
    }

    render () {
        const { mysteryWord, keyboardLetters, testedLetters, playerTry } = this.state
        const won = mysteryWord.length === mysteryWord.filter(letter => (testedLetters.includes(letter))).length

        let component
        if (won) {
            component = <Score onClick={this.handleNewGameClick}/>
        } else {
            component = <KeyBoard keyboardLetters={keyboardLetters} onClick={this.handleLetterClick}/>
        }

        return (
            <div className="game">
                <div className="board">
                    <Counter playerTry={playerTry}/>
                    <MysteryWord mysteryWord={mysteryWord} testedLetters={testedLetters}/>
                </div>

                <HumanFrame playerTry={playerTry}/>

                {component}
            </div>
        )
    }
}

export default Game
