import React from 'react'
import styled from 'styled-components';
import Product from './product/Product';

const Container = styled.div`
    padding: 0.75rem;

    @media only screen and (min-width: 0px) {
        & {
           width: 100%;
       }
    }

    @media only screen and (min-width: 1025px) {
        & {
           width: 75%;
       }
    }
`;

const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: unset;
    margin: -0.75rem;
`;

const Pagination = styled.div``;

const ProductGridList = ({productsData}) => {
  return (
    <Container>
        <div>
            <ProductWrapper>

                {productsData && productsData.map(item => (
                    <Product product={item} />
                ))}
            </ProductWrapper>
            <Pagination />
        </div>
    </Container>
  )
}

export default ProductGridList