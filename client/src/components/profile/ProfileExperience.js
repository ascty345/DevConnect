import React, { Fragment } from 'react';
import Moment from 'react-moment';

const ProfileExperience = (props) => {
  const { company, title, to, from, description } = props.experience;

  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      {description ? (
        <p>
          <strong>Description: </strong> {description}
        </p>
      ) : (
        <Fragment />
      )}
    </div>
  );
};

export default ProfileExperience;
