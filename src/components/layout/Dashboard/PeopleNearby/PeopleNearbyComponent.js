import React, { useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';

import { getPeopleNearby } from '../../../../actions/user';

const PeopleNearbyComponent = ({ getPeopleNearby, peopleNearby }) => {
  console.log(peopleNearby);
  useEffect(() => {
    getPeopleNearby();
  }, []);
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>People Nearby</h1>
      <MDBRow>
        {peopleNearby &&
          peopleNearby.length > 0 &&
          peopleNearby.map(people => <ImageCard peopleNearby={people} />)}
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => ({
  peopleNearby: state.user.peopleNearby
});

export default connect(mapStateToProps, { getPeopleNearby })(
  PeopleNearbyComponent
);
