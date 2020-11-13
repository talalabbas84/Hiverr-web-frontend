import React, { useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import { getViews } from '../../../../actions/user';

const VisitorComponent = ({ views, getViews }) => {
  console.log(views, 'viewssssssssss');

  useEffect(() => {
    getViews();
  }, []);
  return (
    <MDBContainer className='div-main-cont'>
      <h1 className='heading-css'>Visitors</h1>
      <MDBRow>
        {views &&
          views.length > 0 &&
          views.map(people => <ImageCard views={people} />)}
      </MDBRow>
    </MDBContainer>
  );
};
const mapStateToProps = state => ({
  views: state.user.views
});

export default connect(mapStateToProps, { getViews })(VisitorComponent);
