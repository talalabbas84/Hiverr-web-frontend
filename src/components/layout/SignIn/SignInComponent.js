import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import { Paper, Grid, LinearProgress } from '@material-ui/core';
import { MDBBtn, MDBIcon } from 'mdbreact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import Alert from '../Alert';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2)
//     }
//   }
// }));

const SignInComponent = ({ login, isAuthenticated }) => {
  // const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/encounter' />;
  }
  return (
    <Fragment>
      {/* <LinearProgress variant='determinate' value={progress} /> */}
      <Grid className='main-container' container>
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
          <h1 className='heading'>Sign In to Hivrr</h1>
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
                value={email}
                required
                onChange={e => onChange(e)}
                className='form-control form-control-md'
                id='formGroupExampleInput'
                style={{ width: 350 }}
                name='email'
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
                value={password}
                name='password'
                onChange={e => onChange(e)}
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
            <div className='margin-css-4'>
              <Alert />
            </div>
            <div className='btn-sign-in'>
              {/* <Link to='/encounter'> */}
              <MDBBtn className='mr-2' rounded onClick={e => onSubmit(e)}>
                Sign me in!
              </MDBBtn>
              {/* </Link> */}
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

SignInComponent.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignInComponent);
