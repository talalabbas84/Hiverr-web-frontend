import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../layout/Header/Header';
import './ForgetPassword.css';
import { MDBBtn } from 'mdbreact';
import OtpInput from 'react-otp-input';
import { red } from '@material-ui/core/colors';



export const ForgetPassword = () => {
    const [otp, setotp] = useState('');
  const handleChange = e => {
    console.log(e);
    setotp(e);
  };
    return (
        <div>
                <div>
                    <Header/>
                </div>
            <div className='body'>
                <div className='forgetpassword'>
                    <div className='one'>

                    <h>Find your account</h>
                    </div>
                    <div className='two'>
                    <p >Please enter your email on which your registered to send verification code</p>

                    </div>
                    <div style={{marginTop:10, display:'flex', justifyContent:'center', width:'100%' }}>
                    <input
                    type='text'
                    className='input'
                    placeholder='Email'
                    
                    
                     />
                    </div>
                    <div className='button'>
                    <MDBBtn className='btn-continue' size='lg' rounded>
                    Send
                    </MDBBtn>
                    </div>
                    <div className='verificationbox'>
                    <p1>A verfication code </p1>
                    <p2> we sent to your Email address</p2>

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
                    <div>
                        <button className='btn-continue2'>Resend Code</button>
                    </div>
                    <MDBBtn className='btn-continue1' size='lg' rounded>
                            Continue
                            </MDBBtn>

                </div>
            </div>
        </div>
        </div>
    )
}


// export default ForgetPassword;
