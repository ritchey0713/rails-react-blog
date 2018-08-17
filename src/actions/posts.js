import { resetPostForm } from './postFormData'

const API_URL = process.env.REACT_APP_API_URL

//action creators
const setPosts = posts => {
  return {
    type:'GET_POSTS_SUCCESS',
    posts
  }
}

const setPost = post => {
  console.log(post)
  return {
    type:'GET_POST_SUCCESS',
    post
  }
}

const addPost = post => {
  return {
    type: 'CREATE_POST_SUCCESS',
    post
  }
}

const deleteItem = post => {
  return {
    type: 'DELETE_POST',
    post
  }
}

//async actions
export const getPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/posts`)
    .then(resp => resp.json())
    .then(posts => dispatch(setPosts(posts)))
    .catch(error => console.log(error))
  }
}

export const getPost = (id) => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${id}`)
    .then(resp => resp.json())
    .then(post => dispatch(setPost(post)))

  }
}

export const createPost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: post})
    })
    .then(resp => resp.json())
    .then(post =>{
      dispatch(addPost(post))
      dispatch(resetPostForm())
    })
    .catch(error => console.log(error))
  }
}

export const deletePost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${post}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: post})
    })
    .then(resp => resp.json())
    .then(post => dispatch(deleteItem(post)))
  }
}
