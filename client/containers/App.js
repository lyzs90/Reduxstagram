import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from '../components/Main';

const mapStateToProps = (state) => {
  const { posts, comments } = state || {
    posts: {
      isFetching: true,
      items: []
    },
    comments: {
      isFetching: true,
      items: []
    }
  }

  return {
    posts,
    comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
