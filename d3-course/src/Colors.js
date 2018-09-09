import React, {Component} from 'react'
import * as d3 from 'd3'
import Swatch from './Swatch'

export default class Colors extends Component {
    colors = d3.schemeCategory20;

    width = d3.scaleBand().domain(d3.range(20))

    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillUpdate(nextProps){
        this.updateD3(nextProps)
    }

    updateD3(props){
        this.width.range([0, props.width]);
    }

    render(){
        return(
            <g>
                {
                    d3.range(20).map(i => (
                        <g key={i}>
                            <Swatch color={this.colors[i]} width={this.width.step()} x={this.width(i)} y="0"/>
                            <Swatch color={this.colors[20 -1-i]} width={this.width.step()} x={this.width(i)} y="20" />
                        </g>
                    ))
                }
            </g>
        )
    }
}