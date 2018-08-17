
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts.js'


class PostShow extends Component{
  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render(){
    return(

      <div className="container">
        <h3>Title: { this.props.posts.title }</h3> <br />
        SubTitle: {this.props.posts.subtitle}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts }
}


export default connect(mapStateToProps, { getPost })(PostShow)
