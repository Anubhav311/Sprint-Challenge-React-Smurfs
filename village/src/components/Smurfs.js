import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Smurf from './Smurf';

const UlTag = styled.ul`
  margin: auto;
  padding: 0;
`
class Smurfs extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <UlTag>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                setActiveSmurf={this.props.setActiveSmurf}
              />
            );
          })}
        </UlTag>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
