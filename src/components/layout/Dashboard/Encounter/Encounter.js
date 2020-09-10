import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Carousel } from 'react-responsive-carousel';

const Encounter = () => {
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
      </div>
      <div
        // style={{ paddingTop: collapsed ? 150 : 10 }}
        className='div-right-side'
      >
        <p style={{ color: '#fff', fontSize: 50 }}>Julie</p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -60 }}>
          Looking for date
        </p>
        <p style={{ color: '#fff', fontSize: 30 }}>About me</p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -30 }}>
          I am self obsessed, I love singing
        </p>
        <p style={{ color: '#fff', fontSize: 30 }}>Personal info</p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -30 }}>
          Relationship: I'm single
        </p>
        <p style={{ color: '#fff', fontSize: 18, marginTop: -20 }}>
          Sexuality: I'm straight
        </p>
      </div>
    </div>
  );
};

export default Encounter;
