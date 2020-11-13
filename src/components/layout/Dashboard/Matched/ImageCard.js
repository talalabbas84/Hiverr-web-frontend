import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import { MDBMask, MDBView, MDBCol } from 'mdbreact';

const ImageCard = ({ matched, user, history }) => {
  let account;
  // if(user)

  if (
    user &&
    user.user &&
    matched &&
    matched.person_1 &&
    user.user._id.toString() == matched.person_1._id.toString()
  ) {
    account = matched.person_2;
  } else if (
    user &&
    user.user &&
    matched &&
    matched.person_1 &&
    user.user._id.toString() == matched.person_2._id.toString()
  ) {
    account = matched.person_1;
  }
  const CardClickHandler = () => {
    console.log(account._id);
    history.push(`/viewprofile/${account._id}`);
  };

  console.log(account);
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
    matched && user && user.user ? (
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
    ) : null
    // </div>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps, {})(ImageCard));
