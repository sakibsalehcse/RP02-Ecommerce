import { configureStore } from "@reduxjs/toolkit";
import ProducrReducer from "../feature/ProducrSlice";
const Store=configureStore({
    reducer:{
        posts:ProducrReducer ,
    },
})


export default Store;