import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import { MDBMask, MDBView, MDBCol } from 'mdbreact';

const ImageCard = ({ likes, user, history }) => {
  console.log(likes, 'like imagecard');
  const CardClickHandler = () => {
    history.push(`/viewprofile/${likes.liked_by._id}`);
  };
  const getAge = dateString => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <MDBCol md='4' className='image-main-col'>
      <MDBView className='image-sub-col'>
        <div className='card-div-cursor' onClick={CardClickHandler}>
          <img
            style={{ objectFit: 'cover', width: '300px', height: '300px' }}
            src={
              likes && likes.liked_by && likes.liked_by.otherphotos[0]
                ? likes.liked_by.otherphotos[0].url
                : ''
            }
            className='img-fluid'
            alt=''
          />
          <MDBMask className='mask-css' overlay='teal-slight'>
            <p className='white-text para-css-1 '>
              {likes && likes.liked_by && likes.liked_by.name
                ? likes.liked_by.name
                : ''}
              ,{' '}
              {getAge(
                likes && likes.liked_by && likes.liked_by.dob
                  ? likes.liked_by.dob
                  : null
              )}
            </p>

            {/* <p className='white-text para-css-1'>Ontario</p>

          <p className='white-text para-css-1'>2.3 km away</p> */}
          </MDBMask>
        </div>
      </MDBView>
    </MDBCol>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps, {})(ImageCard));
