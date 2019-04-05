import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SmurfContainerDiv = styled.div`
  background-color: lightblue;
  width: 30%;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border-bottom: 1px solid white;
`

const NavButtons = styled.button`
  margin: auto 10px;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  background-color: pink;
`

const Smurf = props => {

  const RouteToUpdateForm = (event) => {
    props.setActiveSmurf(event)
  }

  return (
    <SmurfContainerDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <Link to="/smurf-update-form"><NavButtons id={props.id} onClick={e => RouteToUpdateForm(e)}>Update</NavButtons></Link>
        <NavButtons id={props.id} onClick={props.deleteSmurf}>Delete</NavButtons>
      </div>
    </SmurfContainerDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

