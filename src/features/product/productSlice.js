import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState ={
    loading: false,
    product:[],
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProduct:state => {
            state.loading=true
        },
        getProductSuccess:(state, action) => {
          state.product = action.payload
          state.loading=false
        }

    }
})

export const {getProduct,getProductSuccess} = productSlice.actions

//selector
export const productsSelector = state=> state.product

//reducer
export default productSlice.reducer;

//get the product data
export function fetchProduct(){
    return async dispatch =>{
        dispatch(getProduct())

        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            dispatch(getProductSuccess(res.data))
        }catch (e) {
            console.log(e)
        }
    }
}

/*export function getCartByUser(){
    return async dispatch =>{
        dispatch()

        try{
            const res = await axios.get(`https://fakestoreapi.com/carts/`)
        }catch (e) {

        }
    }
}*/























