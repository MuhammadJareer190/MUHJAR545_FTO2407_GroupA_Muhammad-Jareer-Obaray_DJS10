import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]); // To store posts
  const [error, setError] = useState(null); // To store error messages

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data); // Update state with posts
      } catch (err) {
        setError(err.message); // Update state with error message
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Posts</h1>
      {/* Display error if it exists */}
      {error ? (
        <div style={{ color: "red" }}>
          <h2>Error Loading Posts</h2>
          <p>{error}</p>
        </div>
      ) : (
        // Display posts if fetched successfully
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "15px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
