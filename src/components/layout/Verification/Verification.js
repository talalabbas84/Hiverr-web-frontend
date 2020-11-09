import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Landing/Header';
import { MDBBtn } from 'mdbreact';
import './Verification.css';
import './../Landing/index.css'

import OtpInput from 'react-otp-input';

export const Verification = () => {
  const [otp, setotp] = useState('');
  const handleChange = e => {
    console.log(e);
    setotp(e);
  };
  // const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setFirstName(e.currentTarget.value);
  //     validateFirstName(e.currentTarget.value);
  //   };

  return (
    <div>
      <div>
        <Header />
      </div>
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
          <Link to='/single-photo-upload'>
            <MDBBtn className='btn-continue' size='lg' rounded>
              Continue
            </MDBBtn>
          </Link>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

