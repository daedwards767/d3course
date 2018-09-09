import React from 'react'

const Swatch = (props) => (
    <rect width={props.width} height={20} x={props.x} y={props.y} style={{fill: props.color}}/>
)

export default Swatch;