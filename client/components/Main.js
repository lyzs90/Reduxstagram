import React from 'react';
import { Link } from 'react-router';
import { Loader } from './Loader';

const Main = (props) => {
  const { posts, comments } = props;
  const isEmpty = posts.items.length === 0 & comments.items.length === 0;
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
      {isEmpty
        ? (posts.isFetching ? <Loader /> : <h3></h3>)
        : React.cloneElement(props.children, props)
      }
    </div>
  );
};
  

export default Main;
