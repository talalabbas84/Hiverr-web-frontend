import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import { MDBMask, MDBView, MDBCol } from 'mdbreact';

const ImageCard = ({ views, user, history }) => {
  const CardClickHandler = () => {
    history.push(`/viewprofile/${views._id}`);
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

  return views && views.length > 0 && user && user.user ? (
    <MDBCol md='4' className='image-main-col'>
      <MDBView className='image-sub-col'>
        <div className='card-div-cursor' onClick={CardClickHandler}>
          <img
            style={{ objectFit: 'cover', width: '300px', height: '300px' }}
            src={views.otherPhotos[0].url}
            className='img-fluid'
            alt=''
          />
          <MDBMask className='mask-css-1' overlay='teal-slight'>
            <p className='white-text para-css-1'>
              {views.name}, {getAge(views.dob)}
            </p>

            {/* <p className='white-text para-css-1'>Ontario</p>

          <p className='white-text para-css-1'>2.3 km away</p> */}
          </MDBMask>
        </div>
      </MDBView>
    </MDBCol>
  ) : null;
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps, {})(ImageCard));
