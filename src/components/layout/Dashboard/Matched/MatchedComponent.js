import React, { useState } from 'react';
import './index.css';
import ImageCard from './ImageCard';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const MatchedComponent = () => {
  return (
    <MDBContainer className='mt-5'>
      <h1 className='text-white'>Matched</h1>
      <MDBRow className='mt-3'>
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
export default MatchedComponent;
