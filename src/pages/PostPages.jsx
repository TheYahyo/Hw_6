
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query
});
const PostPages = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  const searchQuery = useSelector(state => state.post.searchQuery);


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        {filteredPosts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPages;
