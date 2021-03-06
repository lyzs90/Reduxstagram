import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CommentEditor extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  _close() {
    this.setState({ showModal: false });
  }

  _open() {
    this.setState({ showModal: true });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const { i } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // dispatch edit comment action
    this.props.editComment(postId, i, author, comment);
    // then clear form
    this.refs.editForm.reset();
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button className="remove-comment edit-icon" onClick={this._open.bind(this)}>&#9998;</button>

        <Modal show={this.state.showModal} onHide={this._close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form ref="editForm" className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
            <input type="text" ref="author" placeholder="author" />
            <input type="text" ref="comment" placeholder="comment" />
            <input type="submit" hidden />
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this._handleSubmit.bind(this)}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
