import React, { useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { HiChevronDown } from 'react-icons/hi'
import { getCategories } from '../redux/productSlice';
import { useSelector } from 'react-redux';
import './FilterQuery.css'

const Container = styled.div`
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
    border-radius: 8px;
    padding: 1.25rem;
    margin-bottom: 55px;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;



const FilterQuery = ({handleChange, changeCategory, selectCategory}) => {
    const categories = useSelector(getCategories)
    const [categoryToggle, setCategoryToggle] = useState(false)

    window.addEventListener('click', () => {
        setCategoryToggle(false)
    })

  return (
    <Container>
        <div className="header-search-bar">
            <div className="search-bar-wrapper">
                <div className="search-box">
                    <div className="search-icon">
                        <div>
                            <BiSearch />
                        </div>
                    </div>
                    <div className="text-field-style">
                        <div className="text-field-box">
                            <input 
                                type="text" 
                                className="search-field" 
                                placeholder='Search and hit enter...'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="search-with-category">
                        <div className="search-with-category-box"onClick={(e) => {
                            e.stopPropagation()
                            setCategoryToggle(!categoryToggle)
                        }}>
                            <span>{selectCategory || 'Categories'}</span>
                            <div>
                                <HiChevronDown />
                            </div>
                        </div>
                        {categoryToggle && (
                            <div className="menu-item-holder">
                                {categories.map((item, index) => (
                                    <div 
                                        className="select-item"
                                        onClick={() => changeCategory(item)}
                                        key={index}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default FilterQuery