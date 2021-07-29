import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import formatDate from '../../utils/formatDate';

import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { _id, text, name, avatar, user, likes, comments, date } = props.post;

  const showActions = props.showActions;

  const likeHandler = () => {
    dispatch(addLike(_id));
  };

  const unlikeHandler = () => {
    dispatch(removeLike(_id));
  };

  const deletePostHandler = () => {
    dispatch(deletePost(_id));
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
        {showActions && (
          <Fragment>
            <button onClick={likeHandler} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up" />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button onClick={unlikeHandler} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`posts/${_id}`} className="btn btn-primary">
              Discussion{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={deletePostHandler}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

export default PostItem;
