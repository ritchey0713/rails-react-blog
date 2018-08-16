import React, {Component} from 'react'
import { connect } from 'react-redux'

import PostCard from '../components/PostCard'
import PostForm from './PostForm'
import { getPosts } from '../actions/posts.js'


class Posts extends Component{

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    return(
      <div>
        <h3> POSTS </h3>
          {this.props.posts.map(post =>
            <PostCard key={post.id}
            post={post} /> )}
            <PostForm />
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
