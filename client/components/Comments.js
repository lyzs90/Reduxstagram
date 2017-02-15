import React, { Component } from 'react';

import CommentEditor from './CommentEditor';

export default class Comments extends Component {
  constructor() {
    super();
  }

  _renderComment(comment, i) {
    const { postId } = this.props.params;
    return (
      <div className="comment flex-container" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button onClick={this.props.removeComment.bind(null, postId, i)} className="remove-comment">&times;</button>
        </p>
        <CommentEditor editComment={this.props.editComment} {...this.props} />
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // dispatch add comment action
    this.props.addComment(postId, author, comment);
    // then clear form
    this.refs.commentForm.reset();
  }

  render() {
    // with ES6, properties of class do not auto bind to React class instance, hence must bind handleSubmit inline. alternatively, bind in the constructor.
    // bind(this) will ensure that 'this' is bound to the provided function's (i.e. this._handleSubmit) scope
    return (
      <div className="comments">
        {this.props.postComments.map(this._renderComment.bind(this))}
        <form ref="commentForm" className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
