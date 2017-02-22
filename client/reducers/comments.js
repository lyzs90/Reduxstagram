// sub reducer to handle individual comments
const postComments = (state = [], action) => {
  const i = action.i;

  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        // return the old state with new comment
        ...state, {
          user: action.author,
          text: action.comment
        }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, i),  // from start till the comment we want to delete
        ...state.slice(i + 1)  // after the deleted comment till the end
      ];
    case 'EDIT_COMMENT':
      return [
        // replace current comment with new one
        ...state.slice(0, i),
        {
          user: action.author,
          text: action.comment
        },
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}

// reducer to handle entire comments state
const comments = (state = [], action) => {
  if(action.type === 'FETCH_DATA_SUCCEEDED'){ // TODO: load comments only when Single is mounted
    return action.data[1];
  }
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // and overwrite this post with new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
