import React from 'react';
import './Shape.css';

export class Shape extends React.Component {
  render() {
    return (
      <div className="shape" style={this.props.style}></div>
    );
  }
}

export default Shape;
