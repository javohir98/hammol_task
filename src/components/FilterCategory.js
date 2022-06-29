import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { getCategories } from '../redux/productSlice';

const Container = styled.div`
    padding: 0.75rem;

    @media only screen and (min-width: 0px) {
        & {
           width: 100%;
       }
    }

    @media only screen and (min-width: 1025px) {
        & {
           width: 25%;
       }
    }

    @media only screen and (max-width: 1024px) {
        & {
            display: none;
        }
    }
`;

const Wrapper = styled.div`
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
    border-radius: 8px;
    padding: 18px 27px;
`;

const H6 = styled.h6`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 0px;
`;

const Category = styled.p`
    font-size: 14px;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    color: rgb(125, 135, 156);
    cursor: pointer;
`;

const FilterCategory = ({filterFunc}) => {
    const categories = useSelector(getCategories)

  return (
    <Container>
        <Wrapper>
            <H6>Categories</H6>
            {categories.map(item => (
                <Category key={item} onClick={() => filterFunc(item)}>{item}</Category>
            ))}
        </Wrapper>
    </Container>
  )
}

export default FilterCategory