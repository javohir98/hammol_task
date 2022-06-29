import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProducts, getProductsState, getProductStatus } from '../redux/productSlice'
import { Link } from 'react-router-dom'
import Product from '../components/product/Product'

const ProductsList = () => {
  const productsStatus = useSelector(getProductStatus)
  const productsData = useSelector(getProductsState)
  const [filter, setFilter] = useState({
    name: '',
    category: '',
    limit: '10',
    offset: ''
  })
  const dispatch = useDispatch()

  useEffect(() => {
  
    dispatch(fetchProducts(`api/product`))
    dispatch(fetchCategories())
    
  }, [productsStatus, dispatch])

  useEffect(() => {
    if(filter.name || filter.category || filter.offset)
      dispatch(fetchProducts(`api/product?name=&category=&limit=10&offset=${filter.offset}`))
  }, [filter.name, filter.category, filter.limit, filter.offset])

  return (
    <div>
      {productsData && productsData.map(item => (
        // <h5><Link to={`product/${item.id}`}>{item.title}</Link></h5>
        <Product product={item} />
        ))}
        <button onClick={() => setFilter({...filter, offset: 2})}>dec</button>
    </div>
  )
}

export default ProductsList