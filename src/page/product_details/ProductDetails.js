import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductDetailSlider from './components/ProductDetailSlider'
import ProductDetailPrice from './components/ProductDetailPrice'
import { 
  Container, 
  ImgAndPriceBox, 
  ImgAndPriceContainer, 
  SpecificationAndReviewContainer 
} from './ProductDetailsStyle'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [detail, setDetail] = useState()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/product/${id}`)
      .then(res => {
        setDetail(res.data)
      })

    return () => {
      setDetail()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <ImgAndPriceContainer>
        <ImgAndPriceBox>
          <ProductDetailSlider imagesData={detail?.images}/>
        </ImgAndPriceBox>
        <ImgAndPriceBox>
          <ProductDetailPrice 
            name={detail?.title}
            price={detail?.price}
            brand={detail?.brand}
            category={detail?.category}
            description={detail?.description}
            stock={detail?.stock}
          />
        </ImgAndPriceBox>
      </ImgAndPriceContainer>
      <SpecificationAndReviewContainer>
        {/* <ProductTabInfo /> */}
      </SpecificationAndReviewContainer>
    </Container>
  )
}

export default ProductDetails