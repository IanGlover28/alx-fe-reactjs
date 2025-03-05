// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Displaying blog post with ID: {postId}</div>;
}

export default BlogPost;
