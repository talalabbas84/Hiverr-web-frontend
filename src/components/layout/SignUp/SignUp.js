import React, { Fragment } from 'react';
import './index.css';

import SignUpComponent from './SignUpComponent';
import Header from '../Header/Header';

const SignUp = () => {
  return (
    <Fragment>
      <Header />
      <section className='section-css'>
        <SignUpComponent />
      </section>
    </Fragment>
  );
};

export default SignUp;
