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
        setError("Data fetching failed"); // Update state with error message
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Blog Posts</h1>
      {/* Display error message */}
      {error ? (
        <div style={{ color: "black", fontSize: "24px", fontWeight: "bold", fontFamily: "serif" }}>
          {error}
        </div>
      ) : (
        // Display posts if fetched successfully
        <ul style={{ listStyleType: "none", padding: 0 }}>
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
