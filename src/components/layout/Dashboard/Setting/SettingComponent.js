import React from 'react';
import './index.css';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { MDBContainer } from 'mdbreact';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

import { deleteAccount, logout } from '../../../../actions/auth';

import DiamondImg from '../../../../asset/images/diamond.png';
const SettingComponent = ({ user, deleteAccount, history, logout }) => {
  // const [radio, setradio] = React.useState('');

  console.log(user, 'userrrrrrrrrrrr');

  // const onClick = event => {
  //   setradio(event);
  // };

  const deleteAccountHandler = () => {
    deleteAccount();
    history.push('/Login');
  };

  const logoutHandler = () => {
    logout();
    history.push('/Login');
  };

  return (
    <MDBContainer className='div-main-cont'>
      <div className='setting-page-main-div'>
        <div className='setting-main-div'>
          <div className='heading-div'>Your basic info</div>
          <div className='row-div-css'>
            <div className='title-css'>Name</div>
            <div className='value-css'>
              {user && user.user && user.user.name}
            </div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Date of Birth</div>
            <div className='value-css'>
              {user &&
                user.user &&
                moment(user.user.dob).format('MMMM Do YYYY')}
            </div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Gender</div>
            <div className='value-css'>
              {user && user.user && user.user.gender}
            </div>
          </div>
        </div>
        <div className='setting-main-div'>
          <div className='heading-div'>Your account</div>
          <div className='row-div-css'>
            <div className='title-css'>Email</div>
            <div className='value-css'>
              {' '}
              {user && user.user && user.user.email}
            </div>
          </div>
          {/* <div className='row-div-css'>
            <div className='title-css'>Password</div>
            <div className='value-css'>**************</div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Phone verification</div>
            <div className='value-css'>+1 470**********</div>
          </div> */}
        </div>
        <div className='setting-main-div'>
          <div className='heading-div'>Privacy</div>
          <div className='row-div-css'>
            <div className='title-css'>Who can view my profile?</div>
            <RadioGroup
              className='value-css'
              row
              aria-label='position'
              name='position'
              defaultValue='top'
            >
              <FormControlLabel
                className='value-css'
                value='end1'
                control={<Radio style={{ color: 'white' }} />}
                label='Anyone'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: 'white' }} />}
                label='Only members'
              />
            </RadioGroup>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Let others share my profile</div>
            <RadioGroup
              className='value-css'
              row
              aria-label='position'
              name='position'
              defaultValue='top'
            >
              <FormControlLabel
                className='value-css'
                value='end1'
                control={<Radio style={{ color: 'white' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: 'white' }} />}
                label='No'
              />
            </RadioGroup>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Show distance</div>
            <RadioGroup
              className='value-css'
              row
              aria-label='position'
              name='position'
              defaultValue='top'
            >
              <FormControlLabel
                className='value-css'
                value='end1'
                control={<Radio style={{ color: 'white' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: 'white' }} />}
                label='No'
              />
            </RadioGroup>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Show me to people i like and visit</div>
            <RadioGroup
              className='value-css'
              row
              aria-label='position'
              name='position'
              defaultValue='top'
            >
              <FormControlLabel
                className='value-css'
                value='end1'
                control={<Radio style={{ color: 'white' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: 'white' }} />}
                label='No'
              />
            </RadioGroup>
          </div>
          <div className='btn-main-save'>
            <div className='sub-btn-div'>
              <p className='btn-premium'>Save</p>
            </div>
          </div>
        </div>
        <div className='setting-main-div'>
          <div className='heading-div'>Invisble mode</div>
          <div className='row-div-css'>
            <div className='title-css'>Hide my presence from other users</div>
            <RadioGroup
              className='value-css'
              row
              aria-label='position'
              name='position'
              defaultValue='top'
            >
              <FormControlLabel
                className='value-css'
                value='end1'
                control={<Radio style={{ color: 'white' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: 'white' }} />}
                label='No'
              />
            </RadioGroup>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>
              Dont show me as a visitor on people profile
            </div>
            <RadioGroup
              style={{ color: 'white' }}
              className='value-css'
              row
              aria-label='position'
              name='position'
              defaultValue='top'
            >
              <FormControlLabel
                className='value-css'
                value='end1'
                control={<Radio style={{ color: 'white' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: 'white' }} />}
                label='No'
              />
            </RadioGroup>
          </div>
          <div className='row-div-css-2'>
            <div className='left-css'>
              <div className='coin-div'>
                <img src={DiamondImg} style={{ width: 20, height: 20 }} />
              </div>
              <p style={{ color: 'white' }}>Activate</p>
            </div>
            <div className='right-css'>
              <div className='btn-main-save'>
                <div className='sub-btn-div'>
                  <p className='btn-premium'>Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='setting-main-div'>
          <div className='heading-div'>Payment settings</div>
          <div className='row-div-css-2'>
            <div className='title-css'>Current Balance</div>
            <div className='value-css-1'>
              <p className='white-class-css'>You have 0 credits</p>
            </div>
          </div>
          <div className='row-div-css-2'>
            <div className='title-css'>Badoo premium package</div>
            <div className='value-css-1'>
              <p className='white-class-css'>Not active</p>
              <div className='right-sub-col-div'>
                <div className='btn-main-save'>
                  <div className='sub-btn-div'>
                    <p className='btn-premium'>Subscribe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row-div-css-2'>
            <div className='title-css'>Current Balance</div>
            <div className='value-css-1'>
              <p className='white-class-css'>You have 0 credits</p>
            </div>
          </div>
        </div>
        <div className='setting-main-div'>
          <div className='row-div-css-2'>
            <div className='title-css'>
              <div className='btn-main-save'>
                <div
                  className='sub-btn-div sub-btn-div-hover-delete'
                  onClick={deleteAccountHandler}
                >
                  <p className='btn-premium'>DeleteAccount</p>
                </div>
              </div>
            </div>
            <div className='value-css'>
              <div className='btn-main-save'>
                <div
                  className='sub-btn-div sub-btn-div-hover-signout'
                  onClick={logoutHandler}
                >
                  <p className='btn-premium'>Signout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
};

const mapStateToProps = state => ({
  // errors: state.authReducer.errors,
  // isVerified: state.authReducer.isVerified,
  // loading: state.authReducer.loading,
  // user: state.authReducer.user,
  // token: state.authReducer.token
  user: state.auth.user
});

export default withRouter(
  connect(mapStateToProps, { deleteAccount, logout })(SettingComponent)
);
