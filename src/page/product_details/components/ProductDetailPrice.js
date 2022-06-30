import React from 'react'
import styled from 'styled-components'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Container = styled.div``;

const H1 = styled.h1`
  font-size: 30px;
  margin-bottom: 1rem;
  margin-top: 0px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const InfoContentSpan = styled.span`
  font-size: 14px;
  color: rgb(125, 135, 156);
`;


const H6 = styled.h6`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: 8px;
`;

const InfoRating = styled.div`
  box-shadow: none;
  cursor: unset;
  margin-left: 8px;
  margin-right: 8px;
`;

const InfoRatingContainer = styled.div`
  display: flex;
  margin: 0px -1px;

  svg {
    height: 16px;
    width: 16px;
    color: rgb(255, 205, 78);
  }
`;

const PriceBlock = styled.div`
  box-shadow: none;
  cursor: unset;
  margin-bottom: 24px;
`;

const H2 = styled.h2`
  font-size: 25px;
  line-height: 1;
  margin-bottom: 4px;
  margin-top: 0px;
  color: rgb(233, 69, 96);
`;

const Span = styled.span`
  font-size: 14px;
  color: inherit;
`;

const Btn = styled.button`
  display: flex;
  width: unset;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 11px 1.5rem;
  font-weight: 600;
  background: rgb(233, 69, 96);
  transition: all 150ms ease-in-out 0s;
  line-height: 1;
  border: none;
  color: rgb(255, 255, 255);
  height: 40px;
  font-size: 14px;
  margin-bottom: 36px;
  border-radius: 5px;

  &:focus {
    box-shadow: rgb(255 225 230) 0px 1px 4px 0px;
  }
`;

const Store = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: rgb(43, 52, 69);
  }
`;


const ProductDetailPrice = (props) => {
  const { name, price, brand, category, description, stock, rating, discount } = props
  return (
    <Container>
      <H1>{name}</H1>
      <InfoContent>
        <InfoContentSpan>
          Brand:
        </InfoContentSpan>
        <H6>{brand}</H6>
      </InfoContent>
      <InfoContent>
        <InfoContentSpan>
          Category:
        </InfoContentSpan>
        <H6>{category}</H6>
      </InfoContent>
      <InfoContent>
        <InfoContentSpan>
          Description:
        </InfoContentSpan>
        <H6>{description}</H6>
      </InfoContent>
      <InfoContent>
        <InfoContentSpan>
          Rated:
        </InfoContentSpan>
        <InfoRating>
          <InfoRatingContainer>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </InfoRatingContainer>
        </InfoRating>
        ({rating})
      </InfoContent>
      <InfoContent>
        <InfoContentSpan>
          discountPercentage:
        </InfoContentSpan>
        <H6>{discount}</H6>
      </InfoContent>
      <PriceBlock>
        <H2>${price}.00</H2>
        <Span>Stock: {stock}</Span>
      </PriceBlock>
      <Btn>Add to Cart</Btn>
    </Container>
  )
}

export default ProductDetailPrice