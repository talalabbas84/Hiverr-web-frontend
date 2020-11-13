import React, { useState, useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow } from 'mdbreact';
import { matched } from '../../../../actions/match';

const MatchedComponent = ({ matched, matches }) => {
  useEffect(() => {
    matched();
  }, []);
  console.log(matches.matches, 'matches');

  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>Matched</h1>
      <MDBRow>
        {matches &&
          matches.matches &&
          matches.matches.length > 0 &&
          matches.matches.map(match => <ImageCard matched={match} />)}
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  matches: state.match.matches
});

export default connect(mapStateToProps, { matched })(MatchedComponent);
