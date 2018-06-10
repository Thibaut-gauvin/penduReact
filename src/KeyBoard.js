import React, { Component } from 'react'
import './KeyBoard.css'

class KeyBoard extends Component {
    render () {
        return (
            <div className="keyboard">
                <button className="key-letter">a</button>
                <button className="key-letter">b</button>
                <button className="key-letter">c</button>
                <button className="key-letter">d</button>
            </div>
        )
    }
}

export default KeyBoard
