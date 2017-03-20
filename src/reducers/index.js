import { combineReducers } from 'redux';
import shapes from './shapes';

const brdrApp = combineReducers({
  shapes: shapes
});

export default brdrApp;
