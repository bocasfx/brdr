import React from 'react';
import { connect } from 'react-redux';
import Shape from './Shape';
import { createShape, mutateShape } from '../actions/shapes';
import { bindActionCreators } from 'redux';
import config from '../config/config';
import './Canvas.css';

export class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.renderShapes = this.renderShapes.bind(this);
    this.generateMutations = this.generateMutations.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  componentDidMount() {
    for (var i = 0; i < config.populationSize; i++) {
      this.props.createShape({});
    }

    setInterval(this.generateMutations, 5000);
  }

  generateMutations() {
    let shapeIdx = Math.floor(Math.random() * config.populationSize);
    let deg = Math.random() > 0.5 ? 180 : 0;
    let direction = Math.random() > 0.5 ? -1 : 1;
    deg *= direction;
    let transform = 'rotate(' + deg + 'deg) scale(' + (0.5 + Math.random()) + ')';
    let shapeStyle = {
      borderRadius: Math.random() > 0.5 ? '50%' : '0',
      borderTopColor: this.getColor(),
      borderBottomColor: this.getColor(),
      borderLeftColor: this.getColor(),
      borderRightColor: this.getColor(),
      backgroundColor: this.getColor(),
      borderColor: Math.random() > 0.5 ? 'teal' : 'papayawhip',
      transform: transform,
      opacity: Math.random() > 0.5 ? '0.75' : '1'
    };

    this.props.mutateShape(shapeIdx, shapeStyle);
  }

  getColor() {
    let value = Math.random();
    if (value < 0.333) {
      return 'transparent';
    } else if (value >= 0.333 && value < 0.666) {
      return 'lightseagreen';
    } else {
      return 'mediumvioletred';
    }
  }

  renderShapes() {
    if (!this.props.shapes.length) {
      return null;
    }

    return this.props.shapes.map((shape, idx) => {
      return (
        <Shape style={shape.style} key={idx}/>
      );
    });
  }

  render() {
    return (
      <div className="main-container">
        {this.renderShapes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shapes: state.shapes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createShape: bindActionCreators(createShape, dispatch),
    mutateShape: bindActionCreators(mutateShape, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
