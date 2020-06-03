import React, {Component} from 'react'
import styled from 'styled-components'
import Card from 'components/card'
import moment from 'moment'
import 'moment/locale/id'
import data from 'data/data.json'
import Cart from 'components/cart'

moment.locale('id')

const Wrapper = styled.div`
    padding: 100px ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
    position: relative;
`

const ToggleWrapper = styled.div`
    display: flex;
	margin-top: ${props => props.theme.space[3]}px;
    overflow: hidden;
    background-color: white;
    box-shadow : ${props => props.theme.boxShadow};

    &.hidden{
        display : none;
    }
    
    input{
        position: absolute !important;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        width: 1px;
        border: 0;
        overflow: hidden;

        &:checked + label{
            background-color: ${props => props.theme.colors.mainTextColor};
            box-shadow: none;
            color: white;
        }
    }

    label {
        color: ${props => props.theme.colors.mainTextColor};
        font-size: ${props => props.theme.fontSizes[2]}px;
        line-height: 1;
        text-align: center;
        padding: 8px 16px;
        margin-right: -1px;
        width : 100%;
        border: 1px solid ${props => props.theme.colors.outlineColor};
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
        transition: all 0.1s ease-in-out;

        &:first-of-type {
            border-radius: 4px 0 0 4px;
        }

        &:last-of-type{
            border-radius: 0 4px 4px 0;
        }
    }
`

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartVisible: true,
            activeClass : true
        };
        this.handleCart = this.handleCart.bind(this);
    }

    handleCart(){
        this.setState({
            cartVisible: false
        })
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
           if(window.scrollY === 0){
               this.setState({activeClass : false})
           }else{
            this.setState({ activeClass : true });
           }
        });
    }

    render(){
        return (
            <Wrapper>
                <ToggleWrapper hidden={!this.activeClass ? false : true}>
                    <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
                    <label for="radio-one">Lunch</label>
                    <input type="radio" id="radio-two" name="switch-one" value="no" />
                    <label for="radio-two">Dinner</label>
                </ToggleWrapper>
                <h4>{moment().format('dddd, DD MMMM YYYY')}</h4>
                {data.map((item, index) => {
                    return <Card handlerSubmit={this.handleCart} data={item} key={index}></Card>
                })}
                <Cart hidden={this.state.cartVisible}/>
            </Wrapper>
        )
    }
}

export default Content;