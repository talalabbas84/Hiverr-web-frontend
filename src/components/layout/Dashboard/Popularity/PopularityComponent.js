import React, { useState } from 'react';
import './index.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Button } from '@material-ui/core';

const PopularityComponent = () => {
  return (
    <MDBContainer className='div-main-cont'>
      <p className='heading-css'>
        Your Popularity: <strong style={{ color: '#05A5D9' }}> Average</strong>
      </p>
      <p className='heading-css'>Meet more people with Hivrr credits</p>
      <div className='x-css'>
        <div className='border-css'>
          <p className='heading-css'>x3</p>
          <p>messages</p>
        </div>
        <div className='border-css'>
          <p className='heading-css'>x5</p>
          <p>visits</p>
        </div>
        <div className='border-css'>
          <p className='heading-css'>x10</p>
          <p>visits&matches</p>
        </div>
        <div className='border-css'>
          <p className='heading-css'>x3</p>
          <p>matches</p>
        </div>
        <div className='border-css'>
          <p className='heading-css'>x4</p>
          <p>likes</p>
        </div>
      </div>

      <p className='para-css'>
        Be shown to hundreds more girls in Encounter, and get more fans
      </p>

      <div className='premium-css'>
        <div className='pics-css'>
          <img
            className='img-1 img-main'
            src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d25026d34a5c400084addc9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D3288%26cropY1%3D471%26cropY2%3D3758'
            alt='Avatar'
          ></img>
          <img
            className='img-2 img-main'
            src='https://akns-images.eonline.com/eol_images/Entire_Site/2020022/rs_600x600-200122133200-600.jennifer-aniston-sag-awards-2.ct.012220.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top'
            alt='Avatar'
          ></img>
          <img
            className='img-3 img-main'
            src='https://pbs.twimg.com/profile_images/1282057272357683201/hm0ianWU_400x400.jpg'
            alt='Avatar'
          ></img>
        </div>
        <div className='premium-text-css'>
          <p className='heading3-css'>Get Hivrr Premium</p>
          <p className='heading4-css'>
            Increase your popularity and access special features
          </p>
        </div>
        <div className='main-btn-div-premium'>
          <p className='btn-premium'>Get Hivrr Premium</p>
        </div>
      </div>
      {/*
      <p>Get the Badoo mobile app and get seen more in Karachi</p> */}
    </MDBContainer>
  );
};

export default PopularityComponent;
