import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts.js'


class PostShow extends Component{

  componentDidMount(){
    this.props.getPost()
  }

  render(){
    console.log(this)
    return(

      <div className="container">
      Title: {this.props.title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}


export default connect(mapStateToProps, { getPost })(PostShow)
