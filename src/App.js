import { Routes, Route } from 'react-router-dom'
import ProductsList from './page/ProductsList'
import ProductDetails from './page/ProductDetails'

const App = () => {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<ProductsList />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App