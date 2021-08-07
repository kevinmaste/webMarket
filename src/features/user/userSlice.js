import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    current:false,
    username:null,
    email:null,
    picture:null,
    carts:[]
}

const userSlice =createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUserCart:(state,action) => {
            state.carts=action.payload.carts
        },
        setActiveAccount:(state,action) => {
            state.username = action.payload.username
            state.email = action.payload.email
            state.picture = action.payload.picture
            state.current = true
        },
        signOut:(state)=>{
            state.username =null
            state.email =null
            state.picture =null
            state.carts =[]
            state.current = false
        }
    }
})

export const {signOut,setActiveAccount,setUserCart} = userSlice.actions
export const usernameSelector =state =>state.user.username
export const pictureSelector =state=>state.user.picture
export const emailSelector = state=>state.user.email
export const currentSelector =state=>state.user.current
export const cartSelector = state=>state.user.carts
export default userSlice.reducer;
















































