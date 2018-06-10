import React, { Component } from 'react'
import './KeyBoard.css'
import PropTypes from 'prop-types'

const TESTED_SYMBOL = 'x'

class KeyBoard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            letters: props.letters,
            onClick: props.onClick
        }
    }

    render () {
        const letters = this.state.letters

        return (
            <div className="keyboard">
                {
                    letters.map(({letter, tested}) => (
                        <button
                            className='key-letter'
                            key={letter}
                            onClick={() => this.props.onClick(letter)}
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
    letters: PropTypes.arrayOf(
        PropTypes.shape({
            letter: PropTypes.string.isRequired,
            tested: PropTypes.bool.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
}

export default KeyBoard
