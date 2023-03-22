import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './CartSlice';

const CartView = () => {
    const ProductInCart = useSelector((state) => state.cartItem.cart);

    const dispatch = useDispatch();

    const Remove = (id) => {
       dispatch(remove(id));
    }

    return (
        <div>
            {ProductInCart.map(product => (
                <div key={product.id}>
                    <article style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", textAlign: "center", padding: "1rem", background: "", color: "black", gap: "3rem" }}>
                        <h4 style={{ color: "green" }}>{product.title}</h4>
                        <img style={{ height: "4rem" }} src={product.image} alt={product.title} />
                        <h5 style={{ color: "red" }}>Price {product.price}</h5>
                        <h4 style={{ color: "green" }}>{product.category}</h4>
                        <h5 style={{ color: "green" }}>Product id:{product.id}</h5>
                        <button onClick={() =>  Remove(product.id)}>Remove</button>
                    </article>
                </div>
            ))}
        </div>
    )
}

export default CartView
