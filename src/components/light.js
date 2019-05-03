import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLight } from '../actions'

class Light extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedLightId){
    let nextSelectedLight = (selectedLightId - 1) < 1 ? 3 : selectedLightId - 1;
    this.props.selectLight(nextSelectedLight);
  }

  render() {
    const { light, selected_light_id } = this.props;
    const className = `light ${light.color} ${light.id === selected_light_id ? 'no-opacity' : ''}`
    return (
      <button 
        onClick={() => this.handleClick(selected_light_id)}
        className={className} 
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectLight }, dispatch);
}

function mapStateToProps(state) {
  return {
    selected_light_id: state.selected_light_id
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Light);