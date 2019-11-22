import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Provider from 'react-redux/es/components/Provider';
import { PersistGate } from 'redux-persist/integration/react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto';
import { store, persistor } from './store';
import routes from './routes';
import Home from './Views/Home';
import Order from './Views/Order';
import Success from './Views/Success';
import './App.scss'

const history = require("history").createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider>
          <div className="container">
            <Router history={history}>
              <Switch>
                  <Route path={routes.home} exact component={Home} />
                  <Route path={routes.order} component={Order} />
                  <Route path={routes.success} component={Success} />
              </Switch>
            </Router>
          </div>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
