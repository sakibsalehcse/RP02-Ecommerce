import React from 'react'

const ProductReducer = (state, action) => {


    if (action.type === "Set_Loading") {

        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === "API_ERROR") {

        return {
            ...state,
            isLoading: false,
            isError: true,

        }
    }

    if (action.type === "MY_API_DATA") {

        const featureData = action.payload.filter((currentValue) => {
            return currentValue.featured === true; // this featured is the api featured
        })

        return{
            isLoading: false,
            products: action.payload,
            featureProducts: [featureData]
        }
    }

};

export default ProductReducer;
