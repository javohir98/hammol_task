import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
  return (
    <div>{detail?.title}</div>
  )
}

export default ProductDetails