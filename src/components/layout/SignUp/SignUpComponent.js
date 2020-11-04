import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import './index.css';
import { Grid } from '@material-ui/core';
import csc from 'country-state-city';

import {
  MDBBtn,
  MDBBtnGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import { DatePicker, Space } from 'antd';
// import {
//   CountryDropdown,
//   RegionDropdown,
//   CountryRegionData
// } from 'react-country-region-selector';

import PropTypes from 'prop-types';

import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';

const dateFormat = 'YYYY/MM/DD';

const SignUpComponent = ({
  setAlert,
  register,
  isAuthenticated,
  user,
  history,
  router
}) => {
  // const [name, setName] = useState('InputMode');
  // if (user) {
  //   console.log(user.data.verification);
  // }
  // const [isverified, setIsverified] = useState();
  // console.log(props);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    dob: '',
    gender: '',
    country: '',
    region: '',
    city: ''
  });
  console.log(history);
  // console.log(router);

  const [countryID, setCountryID] = useState('');
  const [stateID, setStateID] = useState('');

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  // const [password2Err, setPassword2Err] = useState(false);
  const [dobErr, setDobErr] = useState(false);
  // const [dobErr, setDobErr] = useState('');
  const [genderErr, setGenderErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [stateErr, setStateErr] = useState(false);
  const [emailvalidationErr, setEmailvalidationErr] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const onChangeDateHandler = (date, dateString) => {
    setFormData({ ...formData, dob: dateString });
  };

  const onChangeGenderHandler = gender => {
    setFormData({ ...formData, gender });
    console.log(gender);
  };
  const selectCountry = val => {
    setFormData({ ...formData, country: csc.getCountryById(val).name });
    console.log(val);
    setCountryID(val);
    setStateID('');
  };

  const selectRegion = val => {
    setFormData({ ...formData, region: csc.getStateById(val).name });
    setStateID(val);
  };

  const selectCity = val => {
    setFormData({ ...formData, city: csc.getCityById(val).name });
    //  setStateID(val);
  };

  const {
    name,
    email,
    password,
    password2,
    dob,
    gender,
    country,
    region,
    city
  } = formData;

  const onChange = e => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
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
    if (name.length <= 0) {
      // setAlert('Please type in name', 'danger');
      // setFormDataErr({ ...formData, nameErr: true });
      setNameErr(true);
    } else {
      setNameErr(false);
    }

    if (dob.length <= 0) {
      // setAlert('Please type in name', 'danger');
      // setFormDataErr({ ...formData, dobErr: true });
      setDobErr(true);
    } else {
      setDobErr(false);
    }

    if (country.length <= 0) {
      setCountryErr(true);
    } else {
      setCountryErr(false);
    }

    if (region.length <= 0) {
      setStateErr(true);
    } else {
      setStateErr(false);
    }

    if (city.length <= 0) {
      setCityErr(true);
    } else {
      setCityErr(false);
    }

    if (gender.length <= 0) {
      setGenderErr(true);
    } else {
      setGenderErr(false);
    }
    if (email.length <= 0) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailvalidationErr(true);
    } else {
      setEmailvalidationErr(false);
    }

    // console.log(nameErr)

    if (
      name.length > 0 &&
      dob.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      gender.length > 0 &&
      city.length > 0 &&
      region.length > 0 &&
      country.length > 0 &&
      password === password2 &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(
        password
      )
    ) {
      // console.log(nameErr);
      // if(){

      // }
      register({
        name,
        email,
        password,
        dob,
        gender,
        country,
        region,
        city,
        history
      });
    }
  };
  // if (user && user.data) {
  // if (isAuthenticated) {
  //   // setIsverified(user.data.verification);
  //   return <Redirect to='/email-verification' />;
  // }
  // }

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
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
                  name='name'
                  style={{ width: 350 }}
                  // required
                  onChange={e => onChange(e)}
                  size='lg'
                />
                {nameErr && (
                  <p className='error-signup-style'>
                    Please type in your name.
                  </p>
                )}
              </div>
              <div className='margin-css'>
                <Space size={12}>
                  <DatePicker
                    placeholder='Select Date of Birth'
                    // defaultValue='Select Date of Birth'
                    style={{ width: 350, height: 40, color: 'black' }}
                    format={dateFormat}
                    name='dob'
                    onChange={onChangeDateHandler}
                  />
                </Space>
                {dobErr && (
                  <p className='error-signup-style'>
                    Please type in your Date of Birth.
                  </p>
                )}
                {/* <ThemeProvider theme={defaultMaterialTheme}>
                {' '}
                <MuiPickersUtilsProvider
                  style={{ color: 'white' }}
                  utils={DateFnsUtils}
                >
                  <KeyboardDatePicker
                    style={{ color: 'white', borderColor: 'white' }}
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    
                    margin='normal'
                    id='date-picker-inline'
                    color='white'
                    label='Date picker inline'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider>
              </ThemeProvider> */}
              </div>
              <div className='margin-css' style={{ maxWidth: '350px' }}>
                {/* <input
                  type='text'
                  className='form-control form-control-md'
                  id='formGroupExampleInput'
                  placeholder='Type your location'
                  name='location'
                  style={{ width: 350 }}
                  required
                  onChange={e => onChange(e)}
                  value={location}
                  size='lg'
                /> */}
                {/* <CountryDropdown
                  value={country}
                  onChange={val => selectCountry(val)}
                />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={val => selectRegion(val)}
                /> */}
                <select onChange={val => selectCountry(val.target.value)}>
                  <option value='Others' label='Select your country'></option>
                  {csc.getAllCountries().map(city => (
                    <option value={city.id}>{city.name}</option>
                  ))}
                </select>
                {countryID !== '' && (
                  <select onChange={val => selectRegion(val.target.value)}>
                    <option value='Others' label='Select your state'></option>
                    {csc.getStatesOfCountry(countryID).map(city => (
                      <option value={city.id}>{city.name}</option>
                    ))}
                  </select>
                )}
                {stateID !== '' && (
                  <select onChange={val => selectCity(val.target.value)}>
                    <option value='Others' label='Select your city'></option>
                    {csc.getCitiesOfState(stateID).map(city => (
                      <option value={city.id}>{city.name}</option>
                    ))}
                  </select>
                )}
                {(countryErr && (
                  <p className='error-signup-style'>
                    Please select your country
                  </p>
                )) ||
                  (stateErr && (
                    <p className='error-signup-style'>
                      Please select your region
                    </p>
                  )) ||
                  (cityErr && (
                    <p className='error-signup-style'>
                      Please select your city
                    </p>
                  ))}
              </div>
              <div className='margin-css '>
                <label style={{ color: 'white' }}>
                  Please select your gender
                </label>
                <br />
                <MDBBtnGroup
                  name='gender'
                  // onChange={e => onChangeGenderHanlder(e)}
                >
                  <MDBBtn
                    className='mr-2'
                    color={gender !== 'Male' ? 'white' : 'grey'}
                    size='md'
                    onClick={() => onChangeGenderHandler('Male')}
                  >
                    Male
                  </MDBBtn>
                  <MDBBtn
                    className='mr-2'
                    color={gender !== 'Female' ? 'white' : 'grey'}
                    onClick={() => onChangeGenderHandler('Female')}
                    size='md'
                  >
                    Female
                  </MDBBtn>
                  <MDBBtnGroup
                    color='white'
                    size='md'
                    className='dropdown-group-css mr-2 '
                  >
                    <select
                      color='grey'
                      className={`browser-default custom-select h-80 mr-2 ${
                        gender !== '' &&
                        gender !== 'Male' &&
                        gender !== 'Female'
                          ? 'selected-value-dropdown'
                          : ''
                      }`}
                      size='md'
                      onChange={e => onChangeGenderHandler(e.target.value)}
                      // label='others'
                    >
                      {/* <MDBDropdownToggle
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
                    </MDBDropdownMenu> */}
                      <option value='Others' label='Others'>
                        Others
                      </option>
                      <option value='Queer'>Queer</option>
                      <option value='Binary'>Binary</option>
                      <option value='Genderfluid'>Genderfluid</option>
                      <option value='Intersex'>Intersex</option>
                    </select>
                  </MDBBtnGroup>
                </MDBBtnGroup>
                {genderErr && (
                  <p className='error-signup-style'>
                    Please select your gender
                  </p>
                )}
              </div>
              <div className='margin-css'>
                <input
                  placeholder='Enter your email'
                  type='email'
                  className='form-control form-control-md'
                  id='formGroupExampleInput'
                  onChange={e => onChange(e)}
                  value={email}
                  // required
                  name='email'
                />
                {(emailErr && (
                  <p className='error-signup-style'>Please type your email</p>
                )) ||
                  (emailErr && (
                    <p className='error-signup-style'>
                      Please type the valid email format e.g test@test.com
                    </p>
                  ))}
              </div>
              <div className='margin-css'>
                <input
                  placeholder='Enter your password'
                  type='password'
                  className='form-control form-control-md'
                  id='formGroupExampleInput'
                  onChange={e => onChange(e)}
                  value={password}
                  // required
                  name='password'
                />
              </div>
              <div className='margin-css'>
                <input
                  placeholder='Re-Enter your password'
                  type='password'
                  className='form-control form-control-md'
                  id='formGroupExampleInput'
                  onChange={e => onChange(e)}
                  value={password2}
                  name='password2'
                  // required
                />
                {(passwordErr && (
                  <p className='error-signup-style'>
                    Password and confirm Password don't match
                  </p>
                )) ||
                  (passwordValidation && (
                    <p className='error-signup-style'>
                      Please add a password containing 8-20 characters, 1
                      number, 1 uppercase letter,1 lowercase letter and one
                      special character
                    </p>
                  ))}
              </div>

              <div className='margin-css btn-signup-main'>
                {/* <Link to='/email-verification'> */}
                <MDBBtn
                  social='fb'
                  type='submit'
                  className='mr-2  btn-signup'
                  // onClick={e => onSubmit(e)}
                >
                  Sign me Up
                </MDBBtn>
                {/* </Link> */}
              </div>
              <div className='agreement-css '>
                <label style={{ color: 'white' }}>
                  By continuing, you're confirming that you've read and agree to
                  our Terms and Conditions, Privacy Policy and Cookie Policy
                </label>
              </div>
            </div>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

SignUpComponent.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default withRouter(
  connect(mapStateToProps, { setAlert, register })(SignUpComponent)
);
