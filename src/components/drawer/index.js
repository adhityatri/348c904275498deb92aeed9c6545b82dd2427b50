import React, { Component } from 'react'
import Backdrop from 'components/backdrop'
import styled from 'styled-components'
import data from 'data/location.json'

import './index.scss'

const DrawerWrapper = styled.div`
    height: 80%;
    position: fixed;
    bottom: 0;
    display: block;
    width: 100%;
    background-color: white;
    z-index: 10002;
    transition: all .35s ease-in-out 0s;
`

const Header = styled.header`
    padding: ${props => props.theme.space[3]}px;
    display : flex;
    flex-direction: row;
    flex-flow: column-reverse;
    align-items: flex-end;
`

const Wrapper = styled.div`
    padding: ${props => props.theme.space[3]}px;
    position: relative;
`

const Title = styled.h2`
    margin: 0;
`

const Form = styled.form`
    border: 1px solid ${props => props.theme.colors.outlineColor};
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${props => props.theme.space[2]}px 0;


    .input{
        &-icon{
            padding: 0 ${props => props.theme.space[1]}px;
            color: ${props => props.theme.colors.addCartColor};
            font-size: ${props => props.theme.fontSizes[2]}px;
        }

        &-form{
            border: none;
            height: 90%;
            outline : none;
            width: 100%;
        }
    }
`

const ListItem = styled.div`
    display: flex;
    position: relative;
    overflow : hidden;
    border-bottom: 1px solid ${props => props.theme.colors.outlineColor};
    padding: ${props => props.theme.space[2]}px;
`

const ListTitle = styled.h4`
    margin: 0;
`

const Description = styled.span`
    
`

export default class Drawer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={this.props.visibility ? '': 'offscreen'}>
                <Backdrop />
                <DrawerWrapper>
                    <Header>
                        <span onClick={this.props.onClose} class="material-icons">
                            close
                        </span>
                    </Header>
                    <Wrapper>
                        <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
                        <Form>
                            <span class="input-icon material-icons">place</span>
                            <input type="text" class="input-form" name="search" placeholder="Input Location"/>
                        </Form>
                        {data.map((item, index) => {
                            return <ListItem>
                                <span class="material-icons">place</span>
                                <div>
                                    <ListTitle>{item.name}</ListTitle>
                                    <Description>{item.address}</Description>
                                </div>
                            </ListItem>
                        })}
                    </Wrapper>
                </DrawerWrapper>
            </div>
        )
    }
}
