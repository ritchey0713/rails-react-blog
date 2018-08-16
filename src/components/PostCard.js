import React from 'react'

const PostCard = ({ post }) => (
<div key ={post.id} className="postCard">
  <h3>{post.title}</h3>
  <p>{post.subtitle}</p>
  <p>{post.content}</p>
</div>
)

export default PostCard
