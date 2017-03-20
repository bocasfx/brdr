export const mutateShape = (idx, style) => {
  return {
    type: 'MUTATE_SHAPE',
    idx,
    style
  };
};

export const createShape = () => {
  return {
    type: 'CREATE_SHAPE'
  };
};
