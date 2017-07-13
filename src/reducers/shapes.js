const shapes = [];

const createShape = (state, style) => {
  let square = {
    style: style
  };
  let newState = state.slice(0);
  newState.push(square);
  return newState;
};

// const mutateShape = (state, idx, style) => {
//   let newState = state.slice(0);
//   newState[idx].style = style;
//   return newState;
// };

const mutateShape = (state, idx, style) => {
  return state.map((shape) => {
    shape.style = style;
    return shape;
  });
};

const shapeReducer = (state = shapes, action) => {
  switch (action.type) {
    case 'MUTATE_SHAPE':
      return mutateShape(state, action.idx, action.style);
    case 'CREATE_SHAPE':
      return createShape(state, action.style);
    default:
      return state;
  }
};

export default shapeReducer;
