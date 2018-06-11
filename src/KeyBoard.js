import React, { Component } from 'react'
import './KeyBoard.css'
import PropTypes from 'prop-types'

const TESTED_SYMBOL = 'x'

class KeyBoard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            keyboardLetters: props.keyboardLetters,
            onClick: props.onClick
        }
    }

    render () {
        const { keyboardLetters } = this.state

        return (
            <div className="keyboard">
                {
                    keyboardLetters.map(({letter, tested}) => (
                        <button
                            className='key-letter'
                            key={letter}
                            onClick={() => this.state.onClick(letter)}
                            disabled={tested}
                        >
                            { tested ? TESTED_SYMBOL : letter }
                        </button>
                    ))
                }
            </div>
        )
    }
}

KeyBoard.propTypes = {
    keyboardLetters: PropTypes.arrayOf(
        PropTypes.shape({
            letter: PropTypes.string.isRequired,
            tested: PropTypes.bool.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
}

export default KeyBoard
