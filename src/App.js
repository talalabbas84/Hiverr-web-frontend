import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
import './App.css';

import Landing from './components/layout/Landing/Landing';
import SignIn from './components/layout/SignIn/SignIn';

import { Navbar } from './components/layout/Navbar';
// import Encounter from './components/layout/Encounter';
import Dashboard from './components/layout/Dashboard/Dashboard';
import SignUp from './components/layout/SignUp/SignUp';
import store from './store';
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
