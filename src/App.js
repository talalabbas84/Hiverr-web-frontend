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

import ForgetPassword from './components/layout/Dashboard/ForgetPassword/ForgetPassword';
import Encounter from './components/layout/Dashboard/Encounter/Encounter';
import SignUp from './components/layout/SignUp/SignUp';
import PeopleNearby from './components/layout/Dashboard/PeopleNearby/PeopleNearby';
import Messages from './components/layout/Dashboard/Messages/Messages';
import Matched from './components/layout/Dashboard/Matched/Matched';
import LikedYou from './components/layout/Dashboard/LikedYou/LikedYou';
import Visitors from './components/layout/Dashboard/Visitors/Visitor';
import Popularity from './components/layout/Dashboard/Popularity/Popularity';
import Favourities from './components/layout/Dashboard/Favourities/Favourities';
import SinglePhotoUpload from './components/layout/PhotoUpload/SinglePhotoUpload/SinglePhotoUpload.js';
import { MultiPhotoUpload } from './components/layout/PhotoUpload/MultiPhotoUpload/MultiPhotoUpload';
import EmailVerification from './components/layout/Verification/EmailVerification/EmailVerification';

import Setting from './components/layout/Dashboard/Setting/Setting';
import Profile from './components/layout/Dashboard/Profile/Profile';
import { loadUser } from './actions/auth';
import Gallery from './components/layout/Dashboard/Gallery/Gallery';
import PasswordChange from './components/layout/NewPassword/newPassword';
import ViewProfile from './components/layout/Dashboard/ViewProfile';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    // console.log(store.dispatch(loadUser()));
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/encounter' component={Encounter} />
            <Route exact path='/forget-password' component={ForgetPassword} />
            <Route exact path='/people-nearby' component={PeopleNearby} />
            <Route exact path='/signup' component={SignUp} />
            <Route
              exact
              path='/single-photo-upload'
              component={SinglePhotoUpload}
            />
            <Route
              exact
              path='/multi-photo-upload'
              // component={MultiPhotoUpload}
              component={MultiPhotoUpload}
            />
            <Route
              exact
              path='/email-verification'
              component={EmailVerification}
            />
            <Route exact path='/messages' component={Messages} />
            <Route exact path='/matched' component={Matched} />
            <Route exact path='/liked-you' component={LikedYou} />
            <Route exact path='/visitors' component={Visitors} />
            <Route exact path='/favourites' component={Favourities} />
            <Route exact path='/popularity' component={Popularity} />
            <Route exact path='/setting' component={Setting} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/viewprofile/:id' component={ViewProfile} />
            <Route exact path='/gallery' component={Gallery} />
            <Route
              exact
              path='/forget-password-verification'
              component={PasswordChange}
            />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
