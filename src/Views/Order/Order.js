import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import routes from '../../routes';

const Order = () => {
    return <>
        <h1
            style={{ textAlign: 'center' }}
        >
            Place Order
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident vel quos harum similique omnis, ratione dolor eaque itaque? Ullam harum voluptatum earum aliquid a iure ratione placeat ipsam eos.</p>

        <Link to={ routes.success }>
            <Button variant="contained" color="primary">
                Success
            </Button>
        </Link>
        <Link to={ routes.home }>
            <Button variant="contained" color="primary">
                Back to Home
            </Button>
        </Link>
    </>;
};

export default Order;