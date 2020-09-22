import React from 'react';
import './index.css';

import { MDBContainer } from 'mdbreact';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

import DiamondImg from '../../../../asset/images/diamond.png';
const SettingComponent = () => {
  // const [radio, setradio] = React.useState('');

  // const onClick = event => {
  //   setradio(event);
  // };
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
                <div className='sub-btn-div'>
                  <p className='btn-premium'>DeleteAccount</p>
                </div>
              </div>
            </div>
            <div className='value-css'>
              <div className='btn-main-save'>
                <div className='sub-btn-div'>
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

export default SettingComponent;
