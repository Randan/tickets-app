import React from 'react';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) =>
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />;

const TextFieldComponent = props =>
    <Field
        name={props.name}
        component={renderTextField}
        type={props.type ? props.type : 'text'}
        label={props.label}
        min={props.min}
        max={props.max}
        {...props.mask}
    />;

export default TextFieldComponent;