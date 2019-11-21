import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import routes from '../../routes';

const Home = () => {
    return <>
        <h1
            style={{ textAlign: 'center' }}
        >
            Home Page
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste ad earum dolorum temporibus nihil ullam est, sint quia modi, cum unde ratione, quasi cumque eum asperiores doloribus atque? Maxime!</p>

        <div
            style={{
                marginTop: 100
            }}
        >
            <Link to={ routes.order }>
                <Button variant="contained" color="primary">
                    Place Order
                </Button>
            </Link>
        </div>
    </>;
};

export default Home;