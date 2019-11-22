import React from 'react';
import { Field } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import tickets from '../../tickets';
import routes from '../../routes';

const cardMask = createTextMask({
  pattern: '9999 9999 9999 9999'
});

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
  />
)

export default class OrderForm extends React.Component {
  constructor() {
    super();

    this.onTicketChange = this.onTicketChange.bind(this);
  }

  onTicketChange(value) {
    const { handleTicketChange, change } = this.props;

    handleTicketChange(value);

    change("dateTime", "");
    change("amount", 1);
  }

  componentDidMount(){
    const { tickets, handleTicketsInitiate } = this.props;
    
    !tickets && handleTicketsInitiate();
  }

  render() {
    const { currentTicket, dateTimeId } = this.props;

    const currentPeriod
      = dateTimeId && currentTicket.timePeriods
        .find(period => period.id === dateTimeId);

    return (
      <form>
        <div>
          <label style={{ display: 'block' }} htmlFor="ticket">Ticket:</label>
          <Field
            name="ticket"
            component={renderSelectField}
            // onChange={() => handleTicketChange('4c6141f0-fe3d-4478-87ad-db0398f62e3c')}
            onChange={(value) => this.onTicketChange(value)}
          >
            {tickets.map(ticket => 
              <MenuItem
                key={ticket.id}
                value={ticket.id}
                primaryText={ticket.name}
              />
            )}
          </Field>
        </div>

        {currentTicket
          && <div>
            <label style={{ display: 'block' }} htmlFor="dateTime">Date/Time:</label>
            <Field
              name="dateTime"
              component={renderSelectField}
              hintText="Date/Time"
            >
              {currentTicket.timePeriods.map(period =>
                <MenuItem
                  key={period.id}
                  value={period.id}
                  primaryText={period.time}
                />
              )}
            </Field>
          </div>
        }

        {currentPeriod
          && <div>
            <label style={{ display: 'block' }} htmlFor="amount">Amount (max: {currentPeriod.availableAmount}):</label>
            <Field
              name="amount"
              component={renderTextField}
              type="number"
              min={1}
              max={currentPeriod.availableAmount}
            />
          </div>
        }

        <div>
          <Field
            name="cardNumber"
            component={renderTextField}
            type="text"
            label="Card Number"
            {...cardMask}
          />
        </div>
        
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            type="text"
            label="First Name"
          />
        </div>

        <div>
          <Field
            name="lastName"
            component={renderTextField}
            type="text"
            label="Last Name"
          />
        </div>

        <div>
          <Field
            name="email"
            component={renderTextField}
            type="email"
            label="Email"
          />
        </div>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Link to={routes.home}>
            <Button variant="contained" color="primary">
              Back to Home
            </Button>
        </Link>
      </form>
    );
  }
};
