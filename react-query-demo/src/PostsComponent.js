import { useQuery, useQueryClient } from 'react-query';
import React, { useState, useEffect } from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);
  const queryClient = useQueryClient();
  const [refetchCount, setRefetchCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleRefetch = async () => {
    await queryClient.refetchQueries('posts');
    setRefetchCount(refetchCount + 1);
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
      <p>Refetch count: {refetchCount}</p>
    </div>
  );
}

export default PostsComponent;