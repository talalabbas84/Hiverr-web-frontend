import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import { MDBMask, MDBView, MDBCol } from 'mdbreact';

const ImageCard = ({ match, user, history }) => {
  console.log(match, 'matcg in componenet');
  let account;
  // if(user)
  console.log(user);

  const CardClickHandler = () => {};
  if (
    user &&
    user.user &&
    match &&
    match.person_1 &&
    user.user._id.toString() == match.person_1._id.toString()
  ) {
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
    // <div onClick={CardClickHandler}>
    <MDBCol md='4' className='image-main-col'>
      <MDBView className='image-sub-col'>
        <div className='card-div-cursor' onClick={CardClickHandler}>
          <img
            style={{ objectFit: 'cover', width: '300px', height: '300px' }}
            src={account && account.otherphotos[0].url}
            className='img-fluid'
            alt=''
          />
          <MDBMask className='mask-css' overlay='teal-slight'>
            <p className='white-text para-css-1 '>
              {account && account.name}, {getAge(account && account.dob)}
            </p>

            {/* <p className='white-text para-css-1'>Ontario</p>

          <p className='white-text para-css-1'>2.3 km away</p> */}
          </MDBMask>
        </div>
      </MDBView>
    </MDBCol>
    // </div>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps, {})(ImageCard));
