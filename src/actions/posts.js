import { resetPostForm } from './postFormData'

const API_URL = process.env.REACT_APP_API_URL


//action creators
const setPosts = posts => {
  return {
    type:'GET_POSTS_SUCCESS',
    posts
  }
}

const addPost = post => {
  return {
    type: 'CREATE_POST_SUCCESS',
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
