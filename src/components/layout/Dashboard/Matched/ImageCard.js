import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { MDBMask, MDBView, MDBCol } from 'mdbreact';

const ImageCard = ({ match, user }) => {
  console.log(match, 'matcg in componenet');
  let account;
  // if(user)
  console.log(user);
  if (user.user._id.toString() == match.person_1._id.toString()) {
    account = match.person_2;
  } else {
    account = match.person_1;
  }
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
  console.log(account, 'account');
  return (
    <MDBCol md='4' className='image-main-col'>
      <MDBView className='image-sub-col'>
        <img
          style={{ objectFit: 'cover', width: '300px', height: '300px' }}
          src={account.otherphotos[0].url}
          className='img-fluid'
          alt=''
        />
        <MDBMask className='mask-css' overlay='teal-slight'>
          <p className='white-text para-css-1 '>
            {account.name}, {getAge(account.dob)}
          </p>

          {/* <p className='white-text para-css-1'>Ontario</p>

          <p className='white-text para-css-1'>2.3 km away</p> */}
        </MDBMask>
      </MDBView>
    </MDBCol>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {})(ImageCard);
