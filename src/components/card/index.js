import React, { Component } from 'react'
import Button from 'components/button'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'


const CardWrapper = styled.div`
    box-shadow: ${props => props.theme.boxShadow};
    min-height: 100px;
    background-color: white;
    border-radius: 4px;
    margin-bottom : ${props => props.theme.space[3]}px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`
const Wrapper = styled.div`
    padding: ${props => props.theme.space[3]}px;
`

const Title = styled.h3`
    color: ${props => props.theme.colors.mainTextColor};
    margin: 0;
`

const SubTitle = styled.small`
    color: ${props => props.theme.colors.subTextColor};
`

const Price = styled.h2`
    margin: 0;
`

const Footer = styled.div`
    margin-top: ${props => props.theme.space[3]}px;
    display: flex;
    flex-direction : row;
    justify-content: space-between;
    align-items: center;
`

const PosterWrapper = styled.div`
    height: 300px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img{
        width: 100%;
    }
`

const RatingValue = styled.small`
    margin-right: ${props => props.theme.space[1]}px;
    font-size: ${props => props.theme.fontSizes[2]}px;
    font-weight: bold;
`

class Card extends Component {
    constructor(props){
        super(props);
        this.handleCart = this.handleCart.bind(this); 
    }

    formatRupiah(price){
        let reverse = price.toString().split('').reverse().join(''),
	        ribuan 	= reverse.match(/\d{1,3}/g);
            ribuan	= ribuan.join('.').split('').reverse().join('');
            
        return ribuan
    }

    handleCart(){
        this.props.handlerSubmit();
    }

    render() {
        return (
            <CardWrapper>
                <PosterWrapper>
                    <img src={this.props.data.imgUrl} alt={this.props.data.name}></img>
                </PosterWrapper>
                <Wrapper>
                    <RatingValue>{this.props.data.rating}</RatingValue>
                    <StarRatings
                        rating={this.props.data.rating}
                        starRatedColor="orange"
                        starDimension="14px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name='rating'
                    />
                    <Title>{this.props.data.name}</Title>
                    <SubTitle>By {this.props.data.productBy}</SubTitle>

                    <Footer>
                        <Price>Rp {this.formatRupiah(this.props.data.price)}</Price>
                        <Button onClick={this.handleCart} type="primary" actions="add" icon="add"></Button>
                    </Footer>
                </Wrapper>
            </CardWrapper>
        )
    }
}

export default Card;