import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLights } from '../actions';
import Light from './light' 

class Spotlight extends Component {
  componentDidMount(){
    this.props.fetchLights();
  }

  renderLights(){
    const { lights } = this.props;
    if(!lights) return (<div>Loading...</div>);
    return _.map(lights, light => {
      return (
        <Light light={light} key={light.id} />
      );
    });
  }

  render() {
    return (
      <div className='spotlight'>
        <h6 className='title'>Spotlight</h6>
        <div className='lights-container'>{this.renderLights()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lights: state.lights
  }
}

export default connect(mapStateToProps, { fetchLights })(Spotlight);