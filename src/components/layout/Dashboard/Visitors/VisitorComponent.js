import React, { useState } from 'react';
import './index.css';
import ImageCard from './ImageCard';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const VisitorComponent = () => {
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>Visitors</h1>
      <MDBRow>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </MDBRow>
    </MDBContainer>
  );
};
export default VisitorComponent;
