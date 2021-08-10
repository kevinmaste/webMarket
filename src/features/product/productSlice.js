import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState ={
    loading: false,
    product:[],
    //cartItems:[],
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProduct:state => {
            state.loading=true
        },
       /* getCartLoaded:state => {
            state.loading=true
        },*/
        getProductSuccess:(state, action) => {
          state.product = action.payload
          state.loading=false
        },
       /* cartProduct:(state, action) => {
            state.cartItems = action.payload
            state.loading=false
        }*/

    }
})

export const {getProduct,getProductSuccess,cartProduct,getCartLoaded} = productSlice.actions

//selector
export const productsSelector = state=> state.product
//export const cartItemsSelector = state=> state.cartItems
//export const loadingSelector = state=> state.loading
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

//cart in the product
export function getCartByUser(id){
    return async dispatch =>{
        dispatch(getProduct())
        try{
            console.log('the log response was: ' + JSON.stringify(`https://fakestoreapi.com/products/${id}`))
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            dispatch(getProductSuccess(res.data))

        }catch (e) {
            console.log(e.message)
        }
    }
}























