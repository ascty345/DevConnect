import React, { Fragment } from 'react';
import Moment from 'react-moment';

const ProfileEducation = (props) => {
  const { school, degree, fieldofstudy, to, from, description } = props.education;

  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
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
