import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import ProductReducer from "../Reducer/ProductReducer";
// provider
// consumer => useContext Hook
//product warehouse
// create a context

const AppContext = createContext();
const Api = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: []
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async (ApiUrl) => { // actually passing Api here getProduct(Api)  its actually returns promises  thats why async is used
        dispatch({type:"Loading"});
        try {
            const resDataFromApi = await axios.get(ApiUrl);   // await also used for the same reason coz its returning promise insted of .then .then .catch we  use async and await
            console.log(resDataFromApi); // thats for checking that we are getting data from APi or not
            const products = await resDataFromApi.data; // product data from APi
            console.log(products);
            dispatch({ type: "MY_API_DATA", payload: products });
        }
        catch(error) {
             console.error(error);
             dispatch({type:"API_ERROR"});
         }
    }

    useEffect(() => {
        getProducts(Api);
    }, []); // [] this is for array dependencies

    return (

        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider> //...state actually we add all data here
        // Product is work like a deliveryboy and value is a product
    )
}

const useGlobalProductContext = () => {
    return useContext(AppContext);  // its a custom hooks to access product easily
}

export { AppContext, AppProvider, useGlobalProductContext };
