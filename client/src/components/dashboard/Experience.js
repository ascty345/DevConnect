import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
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
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
          {exp.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
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
