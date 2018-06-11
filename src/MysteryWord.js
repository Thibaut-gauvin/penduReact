import React, { Component } from 'react'
import './MysteryWord.css'
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '_'

class MysteryWord extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mysteryWord: props.mysteryWord,
            testedLetters: props.testedLetters
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            mysteryWord: nextProps.mysteryWord,
            testedLetters: nextProps.testedLetters
        })
    }

    render () {
        const { testedLetters, mysteryWord } = this.state

        console.log(mysteryWord)

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
    testedLetters: PropTypes.array.isRequired
}

export default MysteryWord
