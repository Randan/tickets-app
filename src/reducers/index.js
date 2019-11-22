import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentTicket from './currentTicket';
import tickets from './tickets';

export const reducer = combineReducers({
  form: formReducer,
  currentTicket,
  tickets
});