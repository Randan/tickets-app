import { TICKET_CHANGE } from '../actionTypes';

export default (value) => (dispatch, store) => {
  const { tickets } = store();
  const payload = tickets.find(ticket => ticket.id === value);

  dispatch({
    type: TICKET_CHANGE,
    payload
  });
};