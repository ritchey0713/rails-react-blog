

const initialState = {
  title: '',
  subtitle: '',
  content: '',
  category: '',
  img_url: ''
}
export default (state = initialState, action) => {

  switch(action.type){
    case "UPDATED_POST":
      return action.postFormData

    case 'RESET_POST_FORM':
      return initialState

      default:
        return state;
    }
}
