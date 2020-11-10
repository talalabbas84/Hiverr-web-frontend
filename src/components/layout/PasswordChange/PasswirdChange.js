import React, { useState } from 'react';
import Header from '../../layout/Header/Header';
import './PasswirdChange.css';
import { MDBBtn } from 'mdbreact';

export const PasswirdChange = () => {
    return (
        <div>
            <div>
                    <Header/>
                </div>
                <div className='body'>
        <div className='verificationbox'>
            <div>
                    <input
                    type='text'
                    className='input'
                    placeholder='New Password'
                     />
                     <input
                    type='text'
                    className='input'
                    placeholder='Confrim Password'
                     />
            </div>
          
          <br></br>
          {/* <Link> */}
          {/* <button type='button' className=' btn-verify'>
            Continue
          </button> */}
            <MDBBtn className='btn-continue' size='lg' rounded>
              Continue
            </MDBBtn>
          {/* </Link> */}
        </div>
      </div>
        </div>
    )
}
