import React, { Fragment } from 'react';
import './index.css';
import Header from '../Header/Header';
import SignInComponent from './SignInComponent';

const SignIn = () => {
  return (
    <Fragment>
      <Header />
      <section className='section-css'>
        <SignInComponent />
      </section>
    </Fragment>
  );
};

export default SignIn;
