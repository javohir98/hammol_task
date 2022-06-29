import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3001'

const initialState = {
    products: [],
    categories: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('api/product', async (url) => {
    try {
        const response = await axios.get(`${BASE_URL}/${url}`)
        return response.data
    } catch (err) {
        return err.message
    }
})

export const fetchCategories = createAsyncThunk('api/categories', async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/category`)
        return response.data
    } catch (err) {
        return err.message
    }
})

export const fetchProductDetail = createAsyncThunk('api/productDetail', async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/product/${id}`)
        return response.data
    } catch (err) {
        return err.message
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state, action) {
            state.products.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'

                state.products = action.payload
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
    }
})

export const getProductsState = (state) => state.products.products.products
export const getCategories = (state) => state.products.categories
export const getProductStatus = (state) => state.products.status

export const { getProducts } = productSlice.actions

export default productSlice.reducer