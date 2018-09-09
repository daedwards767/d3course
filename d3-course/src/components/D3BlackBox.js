import React, {Component} from 'react'

export default function D3blackBox(D3Render){
    return class BlackBox extends Component {
        componentDidMount(){D3Render.call(this);}
        componentDidUpdate(){D3Render.call(this);}
        render(){
            const {x, y} = this.props
            return <g transform={`translate(${x}, ${y})`} ref="anchor" />
        }
    }
}