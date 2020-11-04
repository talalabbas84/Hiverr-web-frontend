import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../../Header/Header';
import { MDBBtn } from 'mdbreact';
import './index.css';
import OtpInput from 'react-otp-input';

import {
  emailVerification,
  ResendEmailVerification
} from '../../../../actions/auth';
import Alert from '../../Alert';
import Spinner from '../../Spinner';

const EmailVerification = ({
  emailVerification,
  isVerified,
  loading,
  ResendEmailVerification,
  history,
  notification
}) => {
  const [otp, setotp] = useState('');
  const handleChange = e => {
    console.log(e);
    setotp(e);
  };

  const ContinueHandler = () => {
    emailVerification(otp, history);
  };
  // const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setFirstName(e.currentTarget.value);
  //     validateFirstName(e.currentTarget.value);
  //   };
  console.log(isVerified);
  const ResendEmailHandler = () => {
    ResendEmailVerification();
  };
  // if (isVerified === true) {
  //   console.log('is it even cominf hgere');
  //   return <Redirect to='/single-photo-upload' />;
  // }
  return (
    <div>
      <div>
        <Header />
      </div>
      {loading ? <Spinner /> : null}
      <div className='body'>
        <div className='verificationbox'>
          <p>A verfication code </p>
          <p2> we sent to your phone number</p2>

          <div style={{ display: 'flex', width: '50%' }}>
            <OtpInput
              className='otp'
              inputStyle={{
                backgroundColor: 'transparent',
                borderRadius: '10px',
                borderColor: 'white',
                width: '90%',
                display: 'flex'
              }}
              value={otp}
              onChange={handleChange}
              numInputs={4}
            />
          </div>
          <br></br>
          {/* <Link> */}
          {/* <button type='button' className=' btn-verify'>
            Continue
          </button> */}
          {/* <Link to='/single-photo-upload'> */}
          <MDBBtn className='btn-continue' size='lg' onClick={ContinueHandler}>
            Continue
          </MDBBtn>
          {/* </Link> */}
          <Link className='resend-code-css' onClick={ResendEmailHandler}>
            Resend Email Verification Code
          </Link>
          {notification && <p>Email verification code sent successfully!</p>}
          {/* </Link> */}
          <Alert />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isVerified: state.auth.isVerified,
  loading: state.auth.loading,
  notification: state.auth.notification
  // user: state.auth.user
});

export default withRouter(
  connect(mapStateToProps, {
    emailVerification,
    ResendEmailVerification
  })(EmailVerification)
);
