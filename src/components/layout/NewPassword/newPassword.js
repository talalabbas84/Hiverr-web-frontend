import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { ResetPasswordAfterValidCode } from '../../../actions/auth';
import Header from '../../layout/Header/Header';
import './newPassword.css';
import { MDBBtn } from 'mdbreact';

const PasswordChange = ({
  token,
  ResetPasswordAfterValidCode,
  error,
  history
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [PasswordValidation, setPasswordValidation] = useState(false);
  const [PasswordErr, setPasswordErr] = useState('');

  // if (!token) {
  //   return <Redirect to='/forget-password' />;
  // }

  const continueHandler = () => {
    if (password !== confirmPassword) {
      // setAlert('Passwords do not match', 'danger');
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(
        password
      ) ||
      password === ''
    ) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }

    if (
      password === confirmPassword &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(
        password
      ) &&
      password !== ''
    ) {
      ResetPasswordAfterValidCode(password, history);
    }
  };
  const newPasshandler = e => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const confirmPassHandler = e => {
    console.log(e.target.value);
    setconfirmPassword(e.target.value);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='body'>
        <div className='verificationbox'>
          {(PasswordErr && (
            <p className='text-error'>
              Password and confirm password don't match
            </p>
          )) ||
            (PasswordValidation && (
              <p className='text-error'>
                Please add a password containing 8-20 characters, 1 number, 1
                uppercase letter,1 lowercase letter and one special character
              </p>
            ))}

          {error && <p className='text-error'>{error}</p>}

          <div>
            <input
              type='text'
              className='input'
              placeholder='New Password'
              onChange={newPasshandler}
              value={password}
            />
            <input
              type='text'
              className='input'
              placeholder='Confirm Password'
              onChange={confirmPassHandler}
              value={confirmPassword}
            />
          </div>

          <br></br>
          {/* <Link> */}
          {/* <button type='button' className=' btn-verify'>
            Continue
          </button> */}
          <MDBBtn
            className='btn-continue'
            size='lg'
            rounded
            onClick={continueHandler}
          >
            Continue
          </MDBBtn>

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  notification: state.auth.notification,
  error: state.auth.errors,
  token: state.auth.token
});

export default withRouter(
  connect(mapStateToProps, { ResetPasswordAfterValidCode })(PasswordChange)
);
