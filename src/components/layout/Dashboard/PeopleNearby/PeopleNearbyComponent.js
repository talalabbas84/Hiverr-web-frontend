import React from 'react';
import './index.css';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';

const PeopleNearbyComponent = () => {
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>People Nearby</h1>
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
export default PeopleNearbyComponent;
