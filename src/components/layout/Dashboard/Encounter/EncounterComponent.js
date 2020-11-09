import React, { useEffect, useState } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import CrossIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

import { getUsers } from '../../../../actions/user';

const EncounterComponenet = ({ getUsers, users, loading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUsers();
  }, []);
  const swipeRightHandler = () => {
    setCount(count + 1);
  };

  const swipeLeftHandler = () => {
    setCount(count + 1);
  };

  console.log(users);
  return (
    <div className='div-swiper-content'>
      <div className='div-carousel'>
        <Carousel className='carousel-css'>
          <div style={{ height: '100vh' }}>
            <img
              className='img-swiper'
              src='https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
            />
          </div>
          <div style={{ height: '100vh' }}>
            <img
              className='img-swiper'
              src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            />
          </div>
          <div style={{ height: '100vh' }}>
            <img
              className='img-swiper'
              src='https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
            />
          </div>
        </Carousel>
        <div
          style={{
            width: '25%',
            height: 100,
            background: 'red',
            // flex: 1,
            zIndex: 100,
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <button
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              background: '#fff',
              border: '1px solid blue'
            }}
            onClick={swipeRightHandler}
          >
            <CrossIcon style={{ fontSize: 40, color: 'grey' }} />
          </button>
          <button
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              background: '#fff',
              border: '1px solid blue'
            }}
            onClick={swipeLeftHandler}
          >
            <CheckIcon style={{ fontSize: 40, color: 'blue' }} />
          </button>
        </div>
      </div>
      <div
        // style={{ paddingTop: collapsed ? 150 : 10 }}
        className='div-right-side'
      >
        <p style={{ color: '#fff', fontSize: 50 }}>
          {users.length > 0 && users[count].name}
        </p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -60 }}>
          Looking for date
        </p>
        <p style={{ color: '#fff', fontSize: 30 }}>About me</p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -30 }}>
          I am self obsessed, I love singings
        </p>
        <p style={{ color: '#fff', fontSize: 30 }}>Personal info</p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -30 }}>
          Relationship: I'm single
        </p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -20 }}>
          Sexuality: I'm straight
        </p>
        {/*   */}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.user.users,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { getUsers })(EncounterComponenet);
