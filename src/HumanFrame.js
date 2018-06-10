import React, { Component } from 'react'
import './HumanFrame.css'
import PropTypes from 'prop-types'

class HumanFrame extends Component {
    constructor (props) {
        super(props)
        this.state = {
            playerTry: props.playerTry
        }
    }

    render () {
        const playerTry = this.state.playerTry
        const peer = playerTry % 2 === 0

        return (
            <div className="human-frames">
                <p>
                    O<br/>
                    -|-<br/>
                    /´\<br/>
                </p>

                {peer && <span>aie !</span>}
                {playerTry >= 26 && <span>Game Over</span>}
            </div>
        )
    }
}

HumanFrame.propTypes = {
    playerTry: PropTypes.number.isRequired
}

export default HumanFrame
