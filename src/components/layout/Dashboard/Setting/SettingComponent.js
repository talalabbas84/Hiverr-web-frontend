import React, { useState } from 'react';
import './index.css';

import { MDBContainer, MDBFormInline, MDBInput } from 'mdbreact';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
const SettingComponent = () => {
  const [radio, setradio] = React.useState('');

  const onClick = event => {
    setradio(event);
  };
  return (
    <MDBContainer className='div-main-cont'>
      <div className='setting-page-main-div'>
        <div className='setting-main-div'>
          <div className='heading-div'>Your basic info</div>
          <div className='row-div-css'>
            <div className='title-css'>Name</div>
            <div className='value-css'>John Smith</div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Date of Birth</div>
            <div className='value-css'>6 January 1997</div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Gender</div>
            <div className='value-css'>Male</div>
          </div>
        </div>
        <div className='setting-main-div'>
          <div className='heading-div'>Your account</div>
          <div className='row-div-css'>
            <div className='title-css'>Email</div>
            <div className='value-css'>youremail@gmail.com</div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Password</div>
            <div className='value-css'>**************</div>
          </div>
          <div className='row-div-css'>
            <div className='title-css'>Phone verification</div>
            <div className='value-css'>+1 470**********</div>
          </div>
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
                control={<Radio style={{ color: '#6E48DB' }} />}
                label='Anyone'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: '#6E48DB' }} />}
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
                control={<Radio style={{ color: '#6E48DB' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: '#6E48DB' }} />}
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
                control={<Radio style={{ color: '#6E48DB' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: '#6E48DB' }} />}
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
                control={<Radio style={{ color: '#6E48DB' }} />}
                label='Yes'
              />

              <FormControlLabel
                className='value-css'
                value='end'
                control={<Radio style={{ color: '#6E48DB' }} />}
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
      </div>
    </MDBContainer>
  );
};

export default SettingComponent;
