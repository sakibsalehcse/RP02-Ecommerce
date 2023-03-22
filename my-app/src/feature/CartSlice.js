import { createSlice} from "@reduxjs/toolkit";
import ProductView from "./ProductView";
const initialState ={
    counter:0,
    cart:[],
};

const cartSlice=createSlice({
    name:"cartName",
    initialState,

    reducers:{
        add(state, action) {
            state.cart.push(action.payload);
            state.counter=state.counter+1;
          },

        remove(state,action){
            state.cart=state.cart.filter(item=>item.id !==action.payload);
            state.counter=state.counter-1;
        }
    },
})

export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;

