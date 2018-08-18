import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { updatePostFormData } from '../actions/postFormData'
import { createPost } from '../actions/posts'

const BlogForm = () => {


<form onSubmit={this.props.handleSubmit} >
  <div>
    <label htmlFor="title">Title:</label>
    <Field name="title" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="subtitle">Subtitle:</label>
    <Field name="subtitle" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="category">Category:</label>
    <Field name="title" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="img_url">Image:</label>
    <Field name="title" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="content">Content:</label>
    <Field name="content" component="input" type="textarea" />
  </div>
</form>
}
