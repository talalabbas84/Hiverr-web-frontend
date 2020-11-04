import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../../layout/Header/Header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './ForgetPassword.css';
import { MDBBtn } from 'mdbreact';
import OtpInput from 'react-otp-input';
import { red } from '@material-ui/core/colors';
import {
  forgotPassword,
  ResendResetPasswordVerification,
  validateForgotPassword
} from '../../../../actions/auth';
import Spinner from '../../../layout/Spinner';

const ForgetPassword = ({
  forgotPassword,
  history,
  notification,
  error,
  loading,
  ResendResetPasswordVerification,
  validateForgotPassword
}) => {
  const [otp, setotp] = useState('');
  const [email, setEmail] = useState('');
  const handleChange = e => {
    console.log(e);
    setotp(e);
  };

  const emailHandler = e => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const onSendHandler = () => {
    // console.log(e);
    forgotPassword(email);
  };

  const resendHandler = () => {
    ResendResetPasswordVerification(email);
  };

  const continueHandler = () => {
    validateForgotPassword(otp, email, history);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      {loading ? <Spinner /> : null}

      {/* <Spinner />? */}
      <div className='body'>
        {notification && (
          <p style={{ color: 'green', fontSize: '20px' }}>{notification}</p>
        )}
        {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}
        <div className='forgetpassword'>
          <div className='one'>
            <h>Find your account</h>
          </div>
          <div className='two'>
            <p>
              Please enter your email on which your registered to send
              verification code.
            </p>
          </div>
          <div
            style={{
              marginTop: 10,
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <input
              type='text'
              className='input'
              placeholder='Email'
              onChange={emailHandler}
            />
          </div>

          <div className='button'>
            <MDBBtn
              className='btn-continue'
              size='lg'
              rounded
              onClick={onSendHandler}
            >
              Send
            </MDBBtn>
          </div>
          <div className='verificationbox'>
            {/* <p1>A verfication code </p1> */}
            <p style={{}}>A verfication code was sent to your Email address</p>

            <div style={{ display: 'flex' }}>
              <OtpInput
                className='otp'
                inputStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: '10px',
                  borderColor: 'white',
                  width: 50,
                  margin: 7,
                  display: 'flex'
                }}
                value={otp}
                onChange={handleChange}
                numInputs={4}
              />
            </div>
            <div>
              <button className='btn-continue2' onClick={resendHandler}>
                Resend Code
              </button>
            </div>
            <MDBBtn
              className='btn-continue1'
              size='lg'
              rounded
              onClick={continueHandler}
            >
              Continue
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  notification: state.auth.notification,
  error: state.auth.errors
});

export default withRouter(
  connect(mapStateToProps, {
    forgotPassword,
    ResendResetPasswordVerification,
    validateForgotPassword
  })(ForgetPassword)
);
