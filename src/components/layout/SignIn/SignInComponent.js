import React, { Fragment } from 'react';

import { Paper, Grid } from '@material-ui/core';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { Input } from 'antd';

const SignInComponent = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid
          alignItems='center'
          container
          direction='row'
          justify='center'
          item
          xs={12}
          lg={12}
          md={12}
          sm={12}
        >
          <h1 className='heading'>Sign In to Hiverr</h1>
        </Grid>
        <Grid
          item
          alignItems='center'
          container
          direction='row'
          justify='center'
          xs={12}
          lg={12}
          md={12}
          sm={12}
        >
          <p className='para para-media'>
            Please enter your sign details. Signup here if you are not
            registered yet.
          </p>
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          xs={12}
          lg={12}
          md={12}
          sm={12}
        >
          <div className='form-group form-css'>
            <div className='margin-css'>
              <label className='para' htmlFor='formGroupExampleInput'>
                Email
              </label>
              <input
                type='text'
                className='form-control form-control-md'
                id='formGroupExampleInput'
                style={{ width: 350 }}
                size='lg'
              />
            </div>
            <div className='margin-css'>
              <label className='para' htmlFor='formGroupExampleInput'>
                Password
              </label>
              <input
                type='password'
                className='form-control form-control-md'
                id='formGroupExampleInput'
              />
            </div>

            <div>
              <div class='custom-control custom-checkbox checkbox-css'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='defaultUnchecked'
                />
                <label
                  className='custom-control-label para'
                  for='defaultUnchecked'
                >
                  Remember me?
                </label>
              </div>
            </div>
            <div className='btn-sign-in'>
              <MDBBtn className='mr-2' rounded>
                Sign me in!
              </MDBBtn>
            </div>
            <div className='btn-sign-in'>
              <label
                className='underlined-para'
                htmlFor='formGroupExampleInput'
              >
                Forgot your password?
              </label>
            </div>
            <div className='fb-btn'>
              {/* <label
                className='underlined-para-theme'
                htmlFor='formGroupExampleInput'
              >
                SignIn With Facebook
              </label> */}
              <MDBBtn social='fb' className='mr-2 '>
                <MDBIcon fab icon='facebook-f' className='mr-1' /> Login via
                Facebook
              </MDBBtn>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignInComponent;
