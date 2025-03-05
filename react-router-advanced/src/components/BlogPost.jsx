// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  let { id } = useParams(); // Get the dynamic id from the URL

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}

export default BlogPost;
