import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const { postId } = props.params;
  const i = props.posts.items.findIndex((post) => post.code === postId);
  const post = props.posts.items[i];
  const postComments = props.comments.items[postId] || [];  // return empty array in case null comments

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} i={i} {...props} />
    </div>
  );
};

export default Single;
