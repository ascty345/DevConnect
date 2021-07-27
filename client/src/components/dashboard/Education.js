import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

function Education() {
  const educations = useSelector((state) => state.profile.profile.education).map(
    (edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
          {edu.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  );

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Education</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
}

export default Education;
