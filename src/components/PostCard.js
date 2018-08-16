import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './PostCard.css'

const PostCard = ({ post }) => (
<div className="card-container" key ={post.id} className="postCard">
  <div className="card">
  <h3 className="card_title">{post.title}</h3>
  <p className="card__description">{post.subtitle}</p>
  <button className='button'><Link to={`/posts/${post.id}`}>Check it out here!</Link></button>
  <hr />
  </div>
</div>
)

const mapStateToProps = (state) => {
  return {posts: state.posts}
}


export default connect(mapStateToProps)(PostCard)
