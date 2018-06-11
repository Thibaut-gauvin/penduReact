import React, {Component} from 'react'
import './Score.css'
import PropTypes from 'prop-types'

class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onClick: props.onClick
        }
    }

    render () {
        return (
            <div className="score">
                <h1>Victoire !</h1>
                <button onClick={() => this.state.onClick()}>
                    Rejouer !
                </button>
            </div>
        )
    }
}

Score.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Score
