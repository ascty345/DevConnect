import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addComment } from '../../actions/post';

const CommentForm = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(props.postId, { text }));
    setText('');
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave A Comment...</h3>
      </div>
      <form className="form my-1" onSubmit={submitHandler}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default CommentForm;
