import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import * as EmailValidator from 'email-validator';
import { compose } from 'recompose';
import asyncValidate from './asyncValidate';
import OrderForm from './OrderForm';
import handleTicketChange from '../../actions/onTicketChange/handleTicketChange';
import handleTicketsInitiate from '../../actions/ticketsInitiate/handleTicketsInitiate';
import routes from '../../routes';

const history = require("history").createBrowserHistory();

const validate = values => {
    const errors = {};
    const requiredFields = [ 'ticket', 'dateTime', 'amount', 'cardNumber', 'firstName', 'lastName', 'email' ];

    requiredFields.forEach(field => {
        if (!values[ field ]) {
        errors[ field ] = 'Required';
        }
    });

    if (values.email && !EmailValidator.validate(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
}

const selector = formValueSelector('orderForm');

export default compose(
    reduxForm({
        form: 'orderForm',
        validate,
        asyncValidate,
        onSubmitSuccess: () => history.push(routes.success), // FIXME
    }),
    connect(
        state => {
            const currentTicketId = selector(state, 'ticket');
            const dateTimeId = selector(state, 'dateTime');
    
            return {
                currentTicketId,
                dateTimeId,
                currentTicket: state.currentTicket,
                tickest: state.tickets
            };
        },
        {
            handleTicketChange,
            handleTicketsInitiate
        }
    )
)(OrderForm);
