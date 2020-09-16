import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import hiverLogo from '../../../asset/images/hiver-logo.png';
import { Button } from '@material-ui/core';

const Header = props => {
  const history = useHistory();
  const signInHandler = () => {
    props.history.push('/login');
  };
  return (
    <div class='d-flex justify-content-around div-main-main-wrapper'>
      <div className='div-main1' style={{ backgroundColor: 'transparent' }}>
        <img style={{ width: '150px', height: '65px' }} src={hiverLogo} />
      </div>
      <div className='div-right'>
        <div className='div-encounter'>
          <FavoriteBorderOutlinedIcon
            style={{ color: '#fff' }}
            fontSize={'large'}
          />
          <p
            style={{
              margin: '2px',
              color: 'white'
            }}
          >
            Encounter
          </p>
        </div>
        <div className='div-nearby'>
          <LocationOnOutlinedIcon
            style={{ color: '#fff' }}
            fontSize={'large'}
          />
          <p
            style={{
              margin: '2px',
              color: 'white'
            }}
          >
            People nearby
          </p>
        </div>
        <Button
          variant='outlined'
          size='small'
          style={{ color: 'white' }}
          className='button-signin'
          onClick={() => history.push('/login')}
        >
          {/* <Link
            to='/login'
            style={{ color: 'white' }}
            className='button-signin'
          > */}
          Sign In
          {/* </Link> */}
        </Button>
      </div>
    </div>
  );
};

export default Header;
