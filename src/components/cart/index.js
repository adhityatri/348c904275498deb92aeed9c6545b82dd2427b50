import React, { Component } from 'react'
import styled from 'styled-components'
import Button from 'components/button';

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${props => props.theme.space[3]}px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`

const CartWrapper = styled.div`
    min-height: 60px;
    background-color: ${props => props.theme.colors.stickyCartColor};
    color: white;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${props => props.theme.space[3]}px;

`

const Title = styled.h3`
    margin: 0;
`

const SubTitle = styled.span`
    font-size : ${props => props.theme.fontSizes[1]}px;
`

export default class Cart extends Component {
    static defaultProps = {
        hidden: true
    };

    render() {
        return (
            <Wrapper hidden={this.props.hidden}>
                <CartWrapper>
                    <label>
                        <Title>5 Items | Rp 150.000</Title>
                        <SubTitle>Termasuk Ongkos Kirim</SubTitle>
                    </label>
                    <Button type="transparent" size="small" icon="shopping_cart"></Button>
                </CartWrapper>
            </Wrapper>
        )
    }
}