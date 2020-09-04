import React, { Fragment } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import { Navbar } from './components/layout/Navbar';
import Landing from './components/layout/Landing/Landing';

const App = () => {
  console.log(Navbar);
  return (
    <Fragment>
      <Landing />
    </Fragment>
  );
};

export default App;
