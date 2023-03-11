import { createContext, useContext } from "react";

// provider
// consumer => useContext Hook
//product warehouse
// create a context

const AppContext =createContext();

const AppProvider=({children})=>{

    return(
        <AppContext.Provider value={{GlobalProductName:"Iphone"}}>{children}</AppContext.Provider> 
        // Product is work like a deliveryboy and value is a product
    )
}

const useGlobalProductContext=()=>{
    return useContext(AppContext);  // its a custom hooks to access product easily
}

export {AppContext,AppProvider,useGlobalProductContext};
