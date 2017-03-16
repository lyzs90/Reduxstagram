import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';

// could just pass down the props you need. but in this case, just pass all.
const PhotoGrid = (props) => (
  <div className="photo-grid">
    {props.posts.items.map((post, i) => <Photo {...props} key={i} i={i} post={post} />)}
  </div>
);

export default PhotoGrid;
