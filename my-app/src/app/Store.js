import { configureStore } from "@reduxjs/toolkit";
import ProducrReducer from "../feature/ProducrSlice";
import CartReducer from "../feature/CartSlice";
const Store=configureStore({
    reducer:{
        posts:ProducrReducer ,
        cartItem:CartReducer,
    },
})


export default Store;