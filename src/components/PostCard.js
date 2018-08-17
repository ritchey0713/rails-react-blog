import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './PostCard.css'
import PostShow from './PostShow.js'

const PostCard = ({ post }) => (
<div className="card-container" key ={post.id} id={post.id}>
  <div className="card">
  <h3 className="card_title">{post.title}</h3>
  <h6 className="card_description">{post.subtitle}</h6>
  <p className="card_description">{post.category}</p>
  <p className="card_description">{post.content}</p>
  <button className='button'><Link to={`/posts/${post.id}`}>
  <PostShow id={post.id} />
  </Link></button>
  <button>!DELETE!</button>
  <hr />
  </div>
</div>
)

const mapStateToProps = (state) => {
  return ({posts: state.posts})
}



export default connect(mapStateToProps)(PostCard)
