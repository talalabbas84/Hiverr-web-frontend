import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';

const FavouritiesComponent = () => {
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css-3'>
        <Link>
          <p className='white-text-css-10'>Favourited You</p>
        </Link>
        <Link>
          <p className='white-text-css-10'>Your Favourites</p>
        </Link>
      </h1>
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
