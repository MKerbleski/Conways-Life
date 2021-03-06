import React , { Component } from 'react'
import styled from 'styled-components'

export default class Cube extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }  

    render(){
        // console.log(this.props)
        return(
            <CubeDiv onClick={this.props.clickHandler} name={this.props.name} style={{background: this.props.active ? this.props.color: null}}>
                {this.props.name}
            </CubeDiv>
        )
    }
}

const CubeDiv = styled.button`
    border: 1px solid gray;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
`