import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getPost(params.postId));
  }, [dispatch, params.postId]);

  const { post, loading } = useSelector((state) => state.post);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
    </Fragment>
  );
};

export default Post;
