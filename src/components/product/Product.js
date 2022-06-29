import React from 'react'
import { 
  AiFillEye, 
  AiOutlineHeart,
  AiOutlineStar,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import { calcDiscount } from '../../utils/calcDiscount'

import './ProductCard.css'

const Product = ({product}) => {
  
  return (
    <div className='product'>
        <div className="product-container">
            <div className="product-image-holder">
                <div className="product-discount">
                    {parseInt(product.discountPercentage)}% off
                </div>
                <div className="product-extra-icons">
                    <div className="eye-btn">
                        <AiFillEye />
                    </div>
                    <div className="heart-btn">
                        <AiOutlineHeart />
                    </div>
                </div>
                <Link to={`/product/${product.id}`}>
                    <span className='img-wrapper'>
                        <span className='img-box'>
                            <img src={product.thumbnail} alt={product.title} />
                        </span>
                    </span>
                </Link>
            </div>
            <div className="product-details">
                <div className="details-container">
                    <div className='details-content'>
                        <Link to={`/product/${product.id}`}>
                            <h3 className='details-title'>{product.title}</h3>
                        </Link>
                        <div className='rate-container'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <div className='price-container'>
                            <span className='price'>${parseInt(product.price * (1 - product.discountPercentage/100))}.00</span>
                            <span className='discount'><del>{product.price}.00</del></span>
                        </div>
                    </div>
                    <div className="product-counter">
                        <button className='inc'><AiOutlinePlus /></button>
                        <span>1</span>
                        <button className='dec'><AiOutlineMinus /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product