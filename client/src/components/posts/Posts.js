import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <div></div>;
};

export default Posts;
