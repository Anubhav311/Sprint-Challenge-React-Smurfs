import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {

  const RouteToUpdateForm = (event) => {
    props.setActiveSmurf(event)
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <Link to="/smurf-update-form"><button id={props.id} onClick={e => RouteToUpdateForm(e)}>Update</button></Link>
        <button id={props.id} onClick={props.deleteSmurf}>Delete</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

