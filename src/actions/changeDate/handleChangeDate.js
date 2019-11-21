import { CHANGE_DATE } from '../actionTypes';

export default (e) => (dispatch) => {
  let value = e.target.value;

  dispatch({
    type: CHANGE_DATE,
    payload: value
  });
};