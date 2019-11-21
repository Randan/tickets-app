import { CHANGE_DATE } from '../../actions/actionTypes';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return action.payload;
    default:
      return state;
  }
};
