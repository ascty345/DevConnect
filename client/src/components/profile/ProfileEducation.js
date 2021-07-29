import React, { Fragment } from 'react';
import formatDate from '../../utils/formatDate';

const ProfileEducation = (props) => {
  const { school, degree, fieldofstudy, to, from, description } = props.education;

  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        {formatDate(from)} - {to ? formatDate(to) : 'Now'}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
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

export default ProfileEducation;
