import React, { useState } from 'react';
import './index.css';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';

const MatchedComponent = () => {
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>Matched</h1>
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
export default MatchedComponent;
