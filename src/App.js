import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import { Navbar } from './components/layout/Navbar';
import Landing from './components/layout/Landing/Landing';
import SignIn from './components/layout/SignIn/SignIn';

const App = () => {
  return (
    <Fragment>
      <Landing />
    </Fragment>
  );
};

export default App;
