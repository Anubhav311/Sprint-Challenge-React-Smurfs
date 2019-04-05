import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfUpdateForm from './components/SmurfUpdateForm';

const NavbarDiv = styled.div`
  width: 30%;
  background-color: lightblue;
  margin: auto;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const BackDiv = styled.div`
  color: green;
  text-decoration: none;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addSmurf = (smurf) => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      }) 
      .catch(err => {
        console.log(err)
      })
    console.log('hi')
  }

  deleteSmurf = (event) => {
    let varb = {};
    for(let i=0; i<this.state.smurfs.length; i++) {
      if(event.target.id == this.state.smurfs[i].id) {
        varb = this.state.smurfs[i]
      }
    }
    axios 
      .delete(`http://localhost:3333/smurfs/${varb.id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  setActiveSmurf = (event) => {
    let varb = {};
    console.log(event.target.id)
    for(let i=0; i<this.state.smurfs.length; i++) {
      if(event.target.id == this.state.smurfs[i].id) {
        varb = this.state.smurfs[i]
      }
    }
    this.setState({
      activeSmurf: varb
    })
    console.log(this.state.activeSmurf)
  }

  updateSmurf = (update) => {
    axios
      .put(`http://localhost:3333/smurfs/${this.state.activeSmurf.id}`, update)
      .then(res => {
        this.setState({
          smurfs: res.data
        })      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <NavbarDiv>
          <NavLink 
            exact to="/" 
            activeStyle={{
              fontWeight: "bold", 
              color: "red",}}>
            <div>Back to list</div>
          </NavLink>
          <NavLink 
            to="/smurf-form" 
            activeStyle={{
              fontWeight: "bold", 
              color: "red"}}>
            <div>Add a Smurf</div>
          </NavLink>
        </NavbarDiv>
        <Route 
          path="/smurf-form" 
          render={() => (<SmurfForm addSmurf={this.addSmurf}/>)}
        />
        <Route 
          exact path="/" 
          render={() => (<Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} setActiveSmurf={this.setActiveSmurf}/>)}
        />
        <Route 
          path="/smurf-update-form" 
          render={(props) => (<SmurfUpdateForm {...props} updateSmurf={this.updateSmurf}/>)}
        />
      </div>
    );
  }
}

export default App;
