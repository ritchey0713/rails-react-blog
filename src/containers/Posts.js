import React, {Component} from 'react'
import { connect } from 'react-redux'

import PostCard from '../components/PostCard'
import { getPosts } from '../actions/posts.js'
import './Posts.css'


class Posts extends Component{

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    return(
      <div className="container">
        <h3 className="post_header"> POSTS </h3>
          {this.props.posts.map(post =>
            <PostCard key={post.id}
            post={post}
             /> )}
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return ({
    posts: state.posts
  })
}

export default connect(mapStateToProps, { getPosts })(Posts)
