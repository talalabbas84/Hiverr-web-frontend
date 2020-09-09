import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import Landing from './components/layout/Landing/Landing';
import SignIn from './components/layout/SignIn/SignIn';

import { Navbar } from './components/layout/Navbar';
import Encounter from './components/layout/Encounter';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={SignIn} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
