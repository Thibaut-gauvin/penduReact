import React, { Component } from 'react'
import './MysteryWord.css'
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '_'

class MysteryWord extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mysteryWord: props.mysteryWord,
            gameLetters: props.gameLetters
        }
    }

    render () {
        const {gameLetters, mysteryWord} = this.state
        const testedLetters = gameLetters.map(({letter, tested}) => {
            return tested ? letter : null
        })

        return (
            <div className="mystery-word">
                <p>
                    {
                        mysteryWord.map((letter, index) => (
                            <span key={index}>
                                {testedLetters.includes(letter) ? letter : HIDDEN_SYMBOL}
                            </span>
                        ))
                    }
                </p>
            </div>
        )
    }
}

MysteryWord.propTypes = {
    mysteryWord: PropTypes.array.isRequired,
    gameLetters: PropTypes.array.isRequired
}

export default MysteryWord
