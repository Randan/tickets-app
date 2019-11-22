import { TICKETS_INITIATE } from '../../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case TICKETS_INITIATE:
            return action.payload;
        default:
            return state;
    }
};