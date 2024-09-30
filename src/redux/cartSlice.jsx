import { createSlice } from "@reduxjs/toolkit";

    const initialState = []

    const cartSlice = createSlice({
        name : "cart",
        initialState,
        reducers:{
            addToCart(state ,action){
                state.push(action.payload)
                console.log(state)
            },
            deleteFromCart(state, action){
                console.log(action)
                return state.filter(item => item.id != action.payload.id);

            }
        }

    })
    export const {addToCart , deleteFromCart} = cartSlice.actions

    export default cartSlice.reducer;

