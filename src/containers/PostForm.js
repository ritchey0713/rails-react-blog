import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updatePostFormData } from '../actions/postFormData'
import { createPost } from '../actions/posts'

class PostForm extends Component {


  handleOnChange = (e) => {
      const { name, value } = e.target
      const currentPostData = Object.assign({}, this.props.postFormData, {
        [name]: value
      })
      this.props.updatePostFormData(currentPostData)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.createPost(this.props.postFormData)
    this.props.history.push('/')
  }

  render(){
    const { title, subtitle, content, category, img_url} = this.props.postFormData
    return(
      <div>
      create a post!
        <form onSubmit={this.handleOnSubmit}>
        <div>
          <input type="text"
          onChange={this.handleOnChange}
          name="title"
          placeholder="blogTitle"
          value={title} />
        </div>
        <div>
          <input type="text"
          onChange={this.handleOnChange}
          name="subtitle"
          placeholder="subTitle"
          value={subtitle} />
        </div>
        <div>
          <input type="text"
          onChange={this.handleOnChange}
          name="category"
          placeholder="category"
          value={category}/>
          </div>
          <div>
          <input type="text"
          onChange={this.handleOnChange}
          name="img_url"
          placeholder="img_url"
          value={img_url}/>
          </div>
          <div>
          <input type="textarea"
          onChange={this.handleOnChange}
          name="content"
          placeholder="content"
          value={content}/>
          </div>
          <input type="submit" />
          </form>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postFormData
  }
}

export default connect(mapStateToProps, {
  updatePostFormData,
  createPost
 } )(PostForm)
