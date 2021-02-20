import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <li key={this.props.band.id}>{this.props.band.name} <button key={this.props.band.id} onClick={()=>this.props.delete(this.props.band.id)}>Delete</button></li>
      </div>
    );
  }
};

export default Band;
