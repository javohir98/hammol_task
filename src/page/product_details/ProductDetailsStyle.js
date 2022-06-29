import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    margin: 2rem auto;

    @media only screen and (max-width: 1199px) {
        & {
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
`;

export const ImgAndPriceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -2rem;
    justify-content: center;
    width: 100%;

    @media only screen and (max-width: 769px) {
        & {
            margin: 0;
        }
    }  
`;

export const ImgAndPriceBox = styled.div`
    padding: 32px;
    align-items: center;

    @media only screen and (min-width: 0px) {
        & {
            width: 100%;
        }
    }

    @media only screen and (min-width: 769px) {
        & {
            width: 50%;
        }
    }    
`;



export const SpecificationAndReviewContainer = styled.div`

`;


// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;