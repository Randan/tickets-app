import changeDate from './changeDate';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

export const reducer = combineReducers({
  changeDate,
  form: formReducer
});