import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import Home from './Views/Home';
import Order from './Views/Order';
import Success from './Views/Success';
import './App.scss'

const history = createBrowserHistory();

function App() {
  return (
    <div className="container">
      <Router history={ history }>
        <Switch>
            <Route path={ routes.home } exact component={ Home } />
            <Route path={ routes.order } component={ Order } />
            <Route path={ routes.success } component={ Success } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
