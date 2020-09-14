import React from 'react';
import './index.css';

const ImageCard = () => {
  return (
    <div
      className='image-container'
      style={{
        backgroundImage: `url('https://assets.popbuzz.com/2019/02/who-plays-maeve-in-sex-education-on-netflix-1547403516-view-0.jpg')`
      }}
      id='container'
    >
      {/* <img
        id='image'
        src='https://assets.popbuzz.com/2019/02/who-plays-maeve-in-sex-education-on-netflix-1547403516-view-0.jpg'
      /> */}
      <p id='text'>Hello World!</p>
    </div>
  );
};

export default ImageCard;
