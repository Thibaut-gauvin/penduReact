import React from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

const Counter = ({playerTry}) => (
    <div className="counter">
        {playerTry < 26 && <p><span>Tentatives:</span> {playerTry}</p>}
        {playerTry >= 26 && <p><span>Perdu :'( Tentatives:</span> {playerTry}</p>}
    </div>
)

Counter.propTypes = {
    playerTry: PropTypes.number.isRequired,
}

export default Counter
