import React from "react"
import postsData from "../object.json";

const PostList = () => {
    return (
      <div>
        <h1>Hi This is a Title</h1>
        <ul>
          {postsData.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <h4>{post.content}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default PostList;
