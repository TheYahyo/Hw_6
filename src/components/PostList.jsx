import React from 'react';
import { useSelector } from 'react-redux';

const PostList = () => {
  const { posts, searchQuery } = useSelector(state => state.post);

  const filteredPosts = posts.filter(post =>
    post.title.includes(searchQuery) || post.body.includes(searchQuery)
  );

  return (
    <div>
      {filteredPosts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
