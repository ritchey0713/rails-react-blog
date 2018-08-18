
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getPost } from '../actions/posts.js'
import { deletePost } from '../actions/posts.js'


class PostShow extends Component{

  componentDidMount(){
const { id } = this.props.match.params
    this.props.getPost(id)
  }

handleOnClick = () => {
const { id } = this.props.match.params
this.props.deletePost(id)
this.props.history.push('/')
}

  render(){
    return(

      <div className="container">
        <h3>Title: { this.props.posts.title }</h3> <br />
        SubTitle: {this.props.posts.subtitle}
        <button> Edit Posting</button>
        <button onClick={this.handleOnClick}>Delete this post!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts }
}


export default connect(mapStateToProps, { getPost,
  deletePost
 })(PostShow)
