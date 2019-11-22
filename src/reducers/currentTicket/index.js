import { TICKET_CHANGE } from '../../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case TICKET_CHANGE:
            return action.payload;
        default:
            return state;
    }
};