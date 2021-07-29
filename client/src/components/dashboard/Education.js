import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteEducation } from '../../actions/profile';

function Education() {
  const dispatch = useDispatch();

  const deleteEducationHandler = (id) => {
    dispatch(deleteEducation(id));
  };

  const educations = useSelector((state) => state.profile.profile.education).map(
    (edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td>
          {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
        </td>
        <td>
          <button
            onClick={deleteEducationHandler.bind(null, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    )
  );

  return (
    <Fragment>
      <h2 className="my-2">Education</h2>
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
