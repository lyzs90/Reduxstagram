// a reducer takes in two things:
// 1. the acton (info about what happened) and
// 2. a copy of current state

// every time you dispatch an action, every single reducer will fire off. whether you handle the action or not (to change state), is defined in the switch statements.

const posts = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCEEDED': // batch load all posts
      return action.data[0];
    case 'INCREMENT_LIKES':
      const i = action.index;
      // make a copy of the post array but only modify the likes property of the index object
      return [
        ...state.slice(0, i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;
