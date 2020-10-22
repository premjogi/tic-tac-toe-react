import React from 'react'

export default function Square(props) {
    return (
        <button id="btn" className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}