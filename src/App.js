import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Landing from './components/layout/Landing/Landing';
import SignIn from './components/layout/SignIn/SignIn';

import { Navbar } from './components/layout/Navbar';
// import Encounter from './components/layout/Encounter';
// import Dashboard from './components/layout/Dashboard/Dashboard';
import Encounter from './components/layout/Dashboard/Encounter/Encounter';
import SignUp from './components/layout/SignUp/SignUp';
import PeopleNearby from './components/layout/Dashboard/PeopleNearby/PeopleNearby';
import Messages from './components/layout/Dashboard/Messages/Messages';
import { SinglePhotoUpload } from './components/layout/PhotoUpload/SinglePhotoUpload/SinglePhotoUpload.js';
import EmailVerification from './components/layout/Verification/EmailVerification/EmailVerification';
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
            <Route exact path='/encounter' component={Encounter} />
            <Route exact path='/people-nearby' component={PeopleNearby} />
            <Route exact path='/signup' component={SignUp} />
            <Route
              exact
              path='/single-photo-upload'
              component={SinglePhotoUpload}
            />
            <Route
              exact
              path='/email-verification'
              component={EmailVerification}
            />
            <Route exact path='/messages' component={Messages} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
