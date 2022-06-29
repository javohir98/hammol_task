import { Routes, Route } from 'react-router-dom'
import ProductsList from './page/ProductsList'
import ProductDetails from './page/ProductDetails'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;

  @media only screen and (max-width: 1199px) {
        & {
            margin-left: 1rem;
            margin-right: 1rem;
        }
  }
`;

const App = () => {

  return (
    <Container>
      <Routes>
        <Route exact path='/' element={<ProductsList />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </Container>
  )
}

export default App