import React, { useState } from 'react';
import './index.css';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';

const FavouritiesComponent = () => {
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>Favourities</h1>
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
export default FavouritiesComponent;
