import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './ProducrSlice';
import { add } from './CartSlice';

const ProductView = () => {
  const user = useSelector((state) => state.posts);
  const { posts, isLoading, error } = user;
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const [addedItems, setAddedItems] = useState([]);

  const addtoCart = (item) => {
    if (!addedItems.includes(item.id)) {
      dispatch2(add(item));
      setAddedItems([...addedItems, item.id]);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '2rem' }}>
        {posts &&
          posts.map((post) => {
            return (
              <article style={{ padding: '1rem', background: '', color: 'black' }} key={post.id}>
                <h4 style={{ color: 'green' }}>{post.title}</h4>
                <img style={{ height: '8rem', width: '8rem' }} src={post.image} alt={post.title} />
                <h5 style={{ color: 'red' }}>Price {post.price}</h5>
                <p>{post.description}</p>
                <h4 style={{ color: 'green' }}>{post.category}</h4>
                <h5 style={{ color: 'green' }}>Product id:{post.id}</h5>

                <button onClick={() => addtoCart(post)}>Add to cart</button>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default ProductView;
