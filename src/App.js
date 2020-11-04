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
import { Photos } from './components/layout/photo/Photos';
import { Multiplephotos} from './components/layout/Multiplephoto/Multiplephotos';
import {Verification} from './components/layout/Verification/Verification';
import {Gallery} from './components/layout/Gallery/Gallery';
import {info} from './components/layout/Info/info';
import {Wall} from './components/layout/Wall/Wall';
import {ForgetPassword} from './components/layout/ForgetPassword/ForgetPassword';
import {PasswirdChange} from './components/layout/PasswordChange/PasswirdChange';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/dashboard' component={Encounter} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/multiplephotos' component={Multiplephotos} />
          <Route exact path='/verification' component={Verification} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/info' component={info} />
          <Route exact path='/wall' component={Wall} />
          <Route exact path='/ForgetPassword' component={ForgetPassword} />
          <Route exact path='/changepassword' component={PasswirdChange} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
