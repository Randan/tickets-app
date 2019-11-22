import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import routes from '../../routes';

const Home = () => {
    return (
        <Fragment>
            <Typography variant="h1" align="center">
                Home Page
            </Typography>

            <Typography variant="body1" paragraph={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste ad earum dolorum
                temporibus nihil ullam est, sint quia modi, cum unde ratione, quasi cumque eum asperiores doloribus atque? Maxime!
            </Typography>

            <Box mt={4}>
                <Link to={routes.order}>
                    <Button variant="contained" color="primary">
                        Place Order
                    </Button>
                </Link>
            </Box>
        </Fragment>
    );
};

export default Home;