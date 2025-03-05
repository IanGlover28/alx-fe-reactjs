import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Use useQuery to fetch and cache data with configurations
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 1,  // 1 minute
    refetchOnWindowFocus: false, // Disable auto-refetch when window focuses
    keepPreviousData: true, // Keep previous data when fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return <div>An error occurred: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data && data.length > 0 ? (
          data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
}

export default PostsComponent;
