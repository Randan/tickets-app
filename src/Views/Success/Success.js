import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import routes from '../../routes';

const Success = () => {
    return (
        <Fragment>
            <Typography variant="h1" align="center">
                Thank you
            </Typography>

            <Typography variant="body1" paragraph={true}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas saepe recusandae alias
                itaque harum omnis libero delectus ipsa voluptatum provident doloribus, numquam distinctio
                porro a dicta maxime vel dolor dolorum?
            </Typography>

            <Box mt={4}>
                <Link to={routes.home}>
                    <Button variant="contained" color="primary">
                        Back to Home
                    </Button>
                </Link>
            </Box>
        </Fragment>
    );
};

export default Success;