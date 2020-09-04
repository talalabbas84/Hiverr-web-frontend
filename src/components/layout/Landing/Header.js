import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import hiverLogo from '../../../asset/images/hiver-logo.png';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <div class='d-flex justify-content-around'>
      <div
        style={{
          flex: 1,
          display: 'flex',

          justifyContent: 'flex-end'
        }}
      >
        <img style={{ width: '130px', height: '84px' }} src={hiverLogo} />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '8px'
          }}
        >
          <FavoriteBorderOutlinedIcon
            style={{ color: '#fff' }}
            fontSize={'large'}
          />
          <p
            style={{
              margin: '2px',
              color: 'white'

              // fontSize: '20px'
            }}
          >
            Encounter
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '15px'
          }}
        >
          <LocationOnOutlinedIcon
            style={{ color: '#fff' }}
            fontSize={'large'}
          />
          <p
            style={{
              margin: '2px',
              color: 'white'

              // fontSize: '20px'
            }}
          >
            People nearby
          </p>
        </div>
        <Button
          variant='outlined'
          size='small'
          style={{
            color: '#fff',
            borderColor: '#fff',
            height: '40px',
            width: '100px',
            alignSelf: 'center',
            textTransform: 'none',
            fontSize: 17
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
