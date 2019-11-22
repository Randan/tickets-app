import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import tickets from '../../tickets';

import OrderForm from '../../Components/OrderForm';

const Order = () => {
    return (
        <Fragment>
            <Typography variant="h1" align="center">
                Place Order
            </Typography>

            <Typography variant="body1" paragraph={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident vel quos harum
                similique omnis, ratione dolor eaque itaque? Ullam harum voluptatum earum aliquid a iure
                ratione placeat ipsam eos.
            </Typography>

            {tickets && <OrderForm />}
        </Fragment>
    );
};

export default Order;