import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 25%;
`
const InputTag = styled.input`
  margin-top: 20px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 3px;
`

const ButtonTag = styled.button`
  width: 200px;
  height: 30px;
  margin: 30px auto;
  border-radius: 5px;
  background-color: lightblue;
  border: none;
`

class SmurfUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  updateSmurf = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state[e.target.name])
  };

  render() {
    return (
      <div className="SmurfForm">
        <FormTag onSubmit={this.updateSmurf}>
          <InputTag
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <InputTag
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <InputTag
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <ButtonTag type="submit">Add to the village</ButtonTag>
        </FormTag>
      </div>
    );
  }
}

export default SmurfUpdateForm;
