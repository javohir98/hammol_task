import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProducts, getProductsState, getProductStatus } from '../redux/productSlice'
import styled from 'styled-components'
import Pagination from '@mui/material/Pagination'
import ProductGridList from '../components/ProductGridList'
import FilterQuery from '../components/FilterQuery'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: unset;
  margin: -0.75rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const ProductsList = () => {
  const productsStatus = useSelector(getProductStatus)
  const productsData = useSelector(getProductsState)
  const [filter, setFilter] = useState({
    name: '',
    category: '',
    limit: '10',
    offset: 1
  })
  const dispatch = useDispatch()

  useEffect(() => {
  
    dispatch(fetchProducts(`api/product`))
    dispatch(fetchCategories())
    
  }, [productsStatus, dispatch])

  useEffect(() => {
    if(filter.name || filter.category || filter.offset)
      dispatch(fetchProducts(`api/product?name=${filter.name}&category=${filter.category}&limit=${filter.limit}&offset=${filter.offset}`))
  }, [filter.name, filter.category, filter.limit, filter.offset])

  const filterCategory = (value) => {
    setFilter({...filter, category: value})
  }

  const handleChange = (e) => {
    setFilter({...filter, name: e.target.value})
  }

  const handleChangePage = (e,p) => {
    setFilter({...filter, offset: p})

    setTimeout(() => {
      window.scrollTo(0,0);
    }, 200);
  }

  return (
    <>
      <FilterQuery 
        handleChange={handleChange} 
        changeCategory={filterCategory} 
        selectCategory={filter.category}
      />
      <Container>
        <ProductGridList productsData={productsData} />
      </Container>
      <PaginationContainer>
        <Pagination
            count={parseInt(3)}
            page={filter.offset}
            color='primary'
            onChange={handleChangePage}
        />
      </PaginationContainer>
    </>
  )
}

export default ProductsList