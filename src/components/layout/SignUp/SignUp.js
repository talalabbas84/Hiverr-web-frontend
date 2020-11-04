import React, { Fragment, useState } from 'react';
import './index.css';
import { connect } from 'react-redux';

import SignUpComponent from './SignUpComponent';
import Header from '../Header/Header';
import Alert from '../Alert';
import Spinner from '../../layout/Spinner';

const SignUp = ({ loading }) => {
  console.log(loading);
  return (
    <Fragment>
      <Header />
      <section className='section-css1'>
        {loading ? <Spinner /> : null}
        <Alert />
        <SignUpComponent />
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default connect(mapStateToProps)(SignUp);
