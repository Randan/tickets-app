import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import routes from '../../routes';

const Success = () => {
    return <>
        <h1
            style={{ textAlign: 'center' }}
        >
            Thank you
        </h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas saepe recusandae alias itaque harum omnis libero delectus ipsa voluptatum provident doloribus, numquam distinctio porro a dicta maxime vel dolor dolorum?</p>

        <div
            style={{
                marginTop: 100
            }}
        >
            <Link to={ routes.home }>
                <Button variant="contained" color="primary">
                    Back to Home
                </Button>
            </Link>
        </div>
    </>;
};

export default Success;