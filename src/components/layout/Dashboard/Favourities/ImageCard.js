import React from 'react';
import './index.css';
import { MDBMask, MDBView, MDBCol } from 'mdbreact';

const ImageCard = () => {
  return (
    <MDBCol md='4' className='image-main-col'>
      <MDBView className='image-sub-col'>
        <img
          style={{ objectFit: 'cover', width: '300px', height: '300px' }}
          src='https://www.usajacket.com/blog/wp-content/uploads/2019/06/Sex-Education-Maeve-Wiley-Costume-300x169.jpg'
          className='img-fluid'
          alt=''
        />
        <MDBMask className='mask-css' overlay='teal-slight'>
          <p className='white-text para-css-1 '>Sia, 23</p>

          <p className='white-text para-css-1'>Ontario</p>

          <p className='white-text para-css-1'>2.3 km away</p>
        </MDBMask>
      </MDBView>
    </MDBCol>
  );
};

export default ImageCard;
