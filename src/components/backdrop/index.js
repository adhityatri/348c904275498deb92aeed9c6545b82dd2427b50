import React, {Component} from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
    position: fixed;
    height : 100%;
    width : 100%;
    overflow: hidden;
    z-index: 10001;
    background-color: rgba(0,0,0,0.3);
`

export default class BackdropWrapper extends Component {
    render(){
        return (
            <Backdrop ></Backdrop>
        )
    }
}