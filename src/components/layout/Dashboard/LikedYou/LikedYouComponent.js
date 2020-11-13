import React, { useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';

import { getLikes } from '../../../../actions/user';

const LikedYouComponent = ({ getLikes, likes }) => {
  useEffect(() => {
    getLikes();
  }, []);
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>Liked You</h1>
      <MDBRow>
        {likes &&
          likes.length > 0 &&
          likes.map(people => <ImageCard likes={people} />)}
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => ({
  likes: state.user.likes
});
export default connect(mapStateToProps, { getLikes })(LikedYouComponent);
