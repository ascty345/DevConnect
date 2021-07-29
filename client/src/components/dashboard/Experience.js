import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteExperience } from '../../actions/profile';

function Experience() {
  const dispatch = useDispatch();

  const deleteExperienceHandler = (id) => {
    dispatch(deleteExperience(id));
  };

  const experiences = useSelector((state) => state.profile.profile.experience).map(
    (exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td>
          {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
        </td>
        <td>
          <button
            onClick={deleteExperienceHandler.bind(null, exp._id)}
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
      <h2 className="my-2">Experience</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
}

export default Experience;
