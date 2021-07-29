import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

import { deleteComment } from '../../actions/post';

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const postId = props.postId;
  const { _id, text, name, avatar, user, date } = props.comment;

  const deleteCommentHandler = () => {
    dispatch(deleteComment(postId, _id));
  };

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>
        {!auth.loading && user === auth.user._id && (
          <button onClick={deleteCommentHandler} type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
