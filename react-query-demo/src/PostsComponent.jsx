import { useQuery, useQueryClient } from 'react-query';
import React from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);
  const queryClient = useQueryClient();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleRefetch = async () => {
    await queryClient.refetchQueries('posts');
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleRefetch}>Refetch Data</button>
    </div>
  );
}

export default PostsComponent;