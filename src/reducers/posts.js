export default (state = [], action) => {

  switch(action.type){
    case "GET_POSTS_SUCCESS":
      return action.posts

    case "CREATE_POST_SUCCESS":
        return state.concat(action.post)

    case "GET_POST_SUCCESS":
      console.log(action)
      return action.post

    case 'DELETE_POST':
        return {posts: state.posts.filter(post => post.id !== action.id)}

    default:
    return state
  }
}
