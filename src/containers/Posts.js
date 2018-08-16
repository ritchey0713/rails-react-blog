import React from 'react'


const Posts = (props) => (
<div>
  <h3> POSTS </h3>
  {props.posts.map(post =>
    <div key ={post.id} className="postCard">
    <h3>{post.title}</h3>
    <p>{post.subtitle}</p>
    <p>{post.content}</p>
    </div>
  )}
</div>
)

export default Posts
