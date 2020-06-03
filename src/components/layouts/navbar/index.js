import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from 'components/device'

const Wrapper = styled.header`
    padding: 0 ${props => props.theme.space[3]}px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
`

const Nav = styled.nav` 
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 50px;

    @media ${device.mobileM} {
        border-color: ${props => props.theme.colors.outlineColor} 
    }
`

const TitleText = styled.a`
    margin: ${props => props.theme.space[0]};
    color: ${props => props.theme.colors.mainTextColor};   
    display: block;
    font-weight : bold; 
`

const SubTitle = styled.small`
    font-size : ${props => props.theme.fontSizes[1]}px;
    color: ${props => props.theme.colors.subTextColor};
`

const WrapperTitle = styled.div`
    padding-left: ${props => props.theme.space[3]}px;
`

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childShow: true
        }
        this.handleLocation = this.handleLocation.bind(this);
    }
    handleLocation() {
        this.props.handler();
    }
    render() {
        return (
            <Wrapper >
                <Nav>
                    <span class="material-icons">arrow_back</span>
                    <WrapperTitle>
                        <SubTitle >Alamat Pengantar</SubTitle>
                        <TitleText onClick={this.handleLocation}>Tokopedia Tower</TitleText>
                    </WrapperTitle>
                </Nav>
            </Wrapper>
        )
    }
}

export default Navbar;