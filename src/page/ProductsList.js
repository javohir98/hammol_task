import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProducts, getProductsState, getProductStatus } from '../redux/productSlice'
import { Link } from 'react-router-dom'
import Product from '../components/product/Product'
import styled from 'styled-components'
import FilterCategory from '../components/FilterCategory'
import ProductGridList from '../components/ProductGridList'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: unset;
  margin: -0.75rem;
`;

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
    <Container>
      <FilterCategory />
      <ProductGridList productsData={productsData} />
    </Container>
  )
}

export default ProductsList