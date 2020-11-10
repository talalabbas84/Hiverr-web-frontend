import React, { Fragment } from 'react';
import './index.css';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import SignInComponent from './SignInComponent';
import Spinner from '../../layout/Spinner';

const SignIn = ({ loading }) => {
  return (
    <Fragment>
      <Header />
      <section className='section-css'>
        {loading ? <Spinner /> : null}
        <SignInComponent />
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default connect(mapStateToProps)(SignIn);
