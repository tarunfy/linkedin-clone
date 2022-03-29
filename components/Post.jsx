import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <img src={post.photoUrl} />
      <p>{post.input}</p>
    </div>
  );
};

export default Post;
