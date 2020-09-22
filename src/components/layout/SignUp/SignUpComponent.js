import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  MDBBtn,
  MDBBtnGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import { DatePicker } from 'antd';

const dateFormat = 'YYYY/MM/DD';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },

  cssLabel: {
    color: 'green'
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'green !important'
  }
});

const SignUpComponent = props => {
  const [name, setName] = useState('InputMode');

  // const handleChange = name => event => {
  //   setName({
  //     [name]: event.target.value
  //   });
  // };
  // const classes = useStyles();
  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };
  // const { classes } = props;

  return (
    <Fragment>
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
          <h1 className='heading'>Create a new Account</h1>
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
            Join more than <strong>2 million new Hivrr friends.</strong>
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
              <input
                type='text'
                className='form-control form-control-md'
                id='formGroupExampleInput'
                placeholder='Your name'
                style={{ width: 350 }}
                size='lg'
              />
            </div>
            <div className='margin-css'>
              <DatePicker
                placeholder='Select Date of Birth'
                // defaultValue='Select Date of Birth'
                style={{ width: 350, height: 40, color: 'black' }}
                format={dateFormat}
              />
            </div>
            <div className='margin-css'>
              <input
                type='text'
                className='form-control form-control-md'
                id='formGroupExampleInput'
                placeholder='Type your location'
                style={{ width: 350 }}
                size='lg'
              />
            </div>
            <div className='margin-css '>
              <label style={{ color: 'white' }}>
                Please select your gender
              </label>
              <br />
              <MDBBtnGroup>
                <MDBBtn className='mr-2' color='white' size='md'>
                  Male
                </MDBBtn>
                <MDBBtn className='mr-2' color='white' size='md'>
                  Female
                </MDBBtn>
                <MDBBtnGroup
                  color='white'
                  size='md'
                  className='dropdown-group-css mr-2'
                >
                  <MDBDropdown color='white' size='md'>
                    <MDBDropdownToggle
                      caret
                      color='white'
                      className='h-80 mr-2'
                    >
                      Others
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic color='white'>
                      <MDBDropdownItem>Queer</MDBDropdownItem>
                      <MDBDropdownItem>Binary</MDBDropdownItem>
                      <MDBDropdownItem>Non-Binary</MDBDropdownItem>
                      <MDBDropdownItem>Genderfluid</MDBDropdownItem>
                      <MDBDropdownItem>Intersex</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBBtnGroup>
              </MDBBtnGroup>
            </div>
            <div className='margin-css'>
              <input
                placeholder='Enter your email'
                type='email'
                className='form-control form-control-md'
                id='formGroupExampleInput'
              />
            </div>
            <div className='margin-css'>
              <input
                placeholder='Enter your password'
                type='password'
                className='form-control form-control-md'
                id='formGroupExampleInput'
              />
              <label style={{ color: 'white' }}>
                Password should be atleast 5 characters
              </label>
            </div>

            <div className='margin-css btn-signup-main'>
              <Link to='/email-verification'>
                <MDBBtn social='fb' className='mr-2  btn-signup'>
                  Sign me Up
                </MDBBtn>
              </Link>
            </div>
            <div className='agreement-css '>
              <label style={{ color: 'white' }}>
                PBy continuing, you're confirming that you've read and agree to
                our Terms and Conditions, Privacy Policy and Cookie Policy
              </label>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(SignUpComponent);
