import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div>
        <NavLink 
          exact to="/" 
          activeStyle={{
            fontWeight: "bold", 
            color: "red"}}>
          Back to list
        </NavLink>
        <NavLink 
          to="/smurf-form" 
          activeStyle={{
            fontWeight: "bold", 
            color: "red"}}>
          Add a Smurf
        </NavLink>
        </div>
        <Route path="/smurf-form" render={() => (<SmurfForm addSmurf={this.addSmurf}/>)}/>
        <Route exact path="/" render={() => (<Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>)}/>
      </div>
    );
  }
}

export default App;
