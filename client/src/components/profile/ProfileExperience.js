import React, { Fragment } from 'react';
import formatDate from '../../utils/formatDate';

const ProfileExperience = (props) => {
  const { company, title, to, from, description } = props.experience;

  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        {formatDate(from)} - {to ? formatDate(to) : 'Now'}
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
