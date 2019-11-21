import React from 'react';
import tickets from '../../tickets';

import OrderForm from '../../Components/OrderForm';

const Order = () => {
    return <>
        <h1
            style={{ textAlign: 'center' }}
        >
            Place Order
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident vel quos harum similique omnis, ratione dolor eaque itaque? Ullam harum voluptatum earum aliquid a iure ratione placeat ipsam eos.</p>

        { tickets && <OrderForm /> }
    </>;
};

export default Order;