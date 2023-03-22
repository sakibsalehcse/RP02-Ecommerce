import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from "./ProducrSlice";
import { add } from './CartSlice';

const ProductView = () => {
    const user = useSelector((state) => state.posts);
    const { posts, isLoading, error } = user;
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    const addtoCart = (item) => {
        dispatch2(add(item));
        console.log(item);
      }
    return (
        <div style={{ padding: "2rem" }}>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "2rem" }}>
                {posts && posts.map((post) => {
                    return <article style={{ padding: "1rem", background: "", color: "black" }}>
                        <h4 style={{ color: "green" }}>{post.title}</h4>
                        <img style={{ height: "8rem", width: "8rem" }} src={post.image} />
                        <h5 style={{ color: "red" }}>Price {post.price}</h5>
                        <p>{post.description}</p>
                        <h4 style={{ color: "green" }}>{post.category}</h4>
                        <h5 style={{ color: "green" }}>Product id:{post.id}</h5>
                        <button onClick={() => addtoCart(post)}>Add to cart</button>

                    </article>
                })}
            </section>
        </div>
    )
}

export default ProductView;

