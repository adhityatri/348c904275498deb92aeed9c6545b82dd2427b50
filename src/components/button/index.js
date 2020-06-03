import React, {Component} from 'react'
import styled, {css} from 'styled-components'

const Button = styled.button`
    border-radius : 5px;
    border: none;
    padding: ${props => props.theme.space[2]}px;
    background: white;
    box-shadow: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100px;

    ${props => props.type === 'primary' && css`
        background: ${props => props.theme.colors.addCartColor};
        text-transform: uppercase;
        color: white;
    `}

    ${props => props.type === 'transparent' && css`
        background: transparent;
        text-transform: uppercase;
        color: white;
    `}

    ${props => props.size === 'small' && css`
        width: 50px;
        min-width: unset;
    `}
`

export default class ButtonComponent extends Component{
    static defaultProps = {
        type: 'default',
        icon: null
    };
    render(){
        return( 
            <Button type={this.props.type} size={this.props.size} onClick={this.props.onClick}>
                {this.props.actions}
                <span class="material-icons">
                    {this.props.icon}
                </span>
            </Button>
        )
    }
}