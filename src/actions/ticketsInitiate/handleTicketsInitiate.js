import { TICKETS_INITIATE } from '../actionTypes';
import tickets from '../../tickets';

export default () => (dispatch) => {
  dispatch({
    type: TICKETS_INITIATE,
    payload: tickets
  });
};