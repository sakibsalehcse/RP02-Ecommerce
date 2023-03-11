import { createContext, useContext, useEffect } from "react";

// provider
// consumer => useContext Hook
//product warehouse
// create a context

const AppContext =createContext();
const Api ="https://api.pujakaitem.com/api/products";


const AppProvider=({children})=>{


    const getProducts =(ApiUrl)=>{ // actually passing Api here getProduct(Api)

    }
    useEffect(()=>{
        getProducts(Api);
    },[]); // [] this is for array dependencies

    return(
        <AppContext.Provider value={{GlobalProductName:"Iphone"}}>{children}</AppContext.Provider> 
        // Product is work like a deliveryboy and value is a product
    )
}

const useGlobalProductContext=()=>{
    return useContext(AppContext);  // its a custom hooks to access product easily
}

export {AppContext,AppProvider,useGlobalProductContext};
