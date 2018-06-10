import React from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

const Counter = ({playerTry}) => (
    <div className="counter">
        <p><span>Tentatives:</span> {playerTry}</p>
    </div>
)

Counter.propTypes = {
    playerTry: PropTypes.number.isRequired
}

export default Counter
