import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import asyncValidate from './asyncValidate'
import tickets from '../../tickets';
import routes from '../../routes';

const history = require("history").createBrowserHistory();

const cardMask = createTextMask({
  pattern: '9999 9999 9999 9999'
});

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={ label }
    floatingLabelText={ label }
    errorText={ touched && error }
    { ...input }
    { ...custom }
  />
)

const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (
<SelectField
  floatingLabelText={ label }
  errorText={ touched && error }
  { ...input }
  onChange={ (event, index, value) => input.onChange(value) }
  children={ children } />
)

const validate = values => {
  const errors = {}
  const requiredFields = [ 'ticket', 'dateTime', 'amount', 'cardNumber', 'firstName', 'lastName', 'email' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

let OrderForm = props => {
  const { currentTicketId, dateTimeId } = props;


  const currentTicket
    = currentTicketId && tickets
      .filter(ticket => ticket.id === currentTicketId)[0];

  const currentPeriod
    = dateTimeId && currentTicket.timePeriods
      .filter(period => period.id === dateTimeId)[0];

  const handleSubmit = () => history.push(routes.success);

  return (
    <form onSubmit={ handleSubmit() }>
      <div>
        <label style={{ display: 'block' }} htmlFor="ticket">Tickets</label>
        <Field
          name="ticket"
          component={ renderSelectField }
        >
          { tickets.map(ticket => 
            <MenuItem
              key={ ticket.id }
              value={ ticket.id }
              primaryText={ ticket.name }
            />
          )}
        </Field>
      </div>

      { currentTicket
        && <div>
          <label style={{ display: 'block' }} htmlFor="dateTime">Date/Time</label>
          <Field
            name="dateTime"
            component={ renderSelectField }
            hintText="Date/Time"
          >
            { currentTicket.timePeriods.map(period =>
                <MenuItem
                  key={ period.id }
                  value={ period.id }
                  primaryText={ period.time }
                />
              )
            }
          </Field>
        </div>
      }

      { currentPeriod
        && <div>
          <label style={{ display: 'block' }} htmlFor="amount">Amount (max: { currentPeriod.availableAmount })</label>
          <Field
            name="amount"
            component={ renderTextField }
            type="number"
            min={ 1 }
            max={ currentPeriod.availableAmount }
          />
        </div>
      }

      <div>
        <Field
          name="cardNumber"
          component={ renderTextField }
          type="text"
          label="Card Number"
          { ...cardMask }
        />
      </div>
      
      <div>
        <Field
          name="firstName"
          component={ renderTextField }
          type="text"
          label="First Name"
        />
      </div>

      <div>
        <Field
          name="lastName"
          component={ renderTextField }
          type="text"
          label="Last Name"
        />
      </div>

      <div>
        <Field
          name="email"
          component={ renderTextField }
          type="email"
          label="Email"
        />
      </div>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      <Link to={ routes.home }>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
      </Link>
    </form>
  );
};

OrderForm = reduxForm({
  form: 'orderForm',
  validate,
  asyncValidate
})(OrderForm);

const selector = formValueSelector('orderForm');
OrderForm = connect(
  state => {
    const currentTicketId = selector(state, 'ticket');
    const dateTimeId = selector(state, 'dateTime');

    return {
      currentTicketId,
      dateTimeId
    };
  }
)(OrderForm)

export default OrderForm;