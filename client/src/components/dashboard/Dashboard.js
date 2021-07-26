import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);

  const profile = useSelector((state) => state.profile);

  return <div>Dashboard</div>;
}

export default Dashboard;
