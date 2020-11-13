import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Upload, Modal } from 'antd';
import './index.css';
import { Select, Tag, Input, Image } from 'antd';
import HeartFilled from '@material-ui/icons/Favorite';
import Heart from '@material-ui/icons/FavoriteBorder';
import { getUser } from '../../../../actions/user';

const ViewProfileComponent = ({ user, match, getUser, profile }) => {
  const [favourite, setfavourite] = useState(true);
  const [previewVisible, setpreviewVisible] = useState(false);

  const [previewImage, setPreviewImage] = useState('');

  console.log(profile, 'profileeeee');

  useEffect(() => {
    getUser(match.params.id);
  }, []);

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

  const handleCancel = () => setpreviewVisible(false);

  return (
    <div className='div-swiper-content-profile'>
      <div className='div-head-profile'>
        <p className='name-text'>
          {profile && profile.name}, {getAge(profile && profile.dob)}
        </p>
        <div className='right-btn-div'>
          <button
            onClick={() => setfavourite(!favourite)}
            style={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              marginTop: -20,
              padding: 0
            }}
          >
            {favourite ? (
              <HeartFilled style={{ fontSize: 40, color: 'red' }} />
            ) : (
              <Heart style={{ fontSize: 40, color: 'red' }} />
            )}
          </button>
          <div
            style={{
              width: 1,
              height: 20,
              backgroundColor: '#fff',
              marginLeft: 10
            }}
          />
          <Link to='/'>
            <p className='right-btns'>MESSAGE</p>
          </Link>

          {/* <p className='right-btns'>Gallery</p> */}
          {/* <p className='right-btns'>Profile</p> */}
        </div>
      </div>
      <div className='clearfix'>
        <Image
          width={120}
          style={{ margin: 5 }}
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        />

        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>

      {profile && (
        <div className='body-div'>
          {profile.work && (
            <React.Fragment>
              <div className='work-education'>
                <p className='text-heading'>Work</p>
                <p className='text-para'>{profile.work}</p>
              </div>
              <div className='div-line' />
            </React.Fragment>
          )}
          {profile.education && (
            <React.Fragment>
              <div className='work-education'>
                <p className='text-heading'>Education</p>
                <p className='text-para'>{profile.education}</p>
              </div>
              <div className='div-line' />
            </React.Fragment>
          )}

          <div className='work-education'>
            <p className='text-heading'>Location</p>
            <p className='text-para'>Toronto, Canada</p>
          </div>

          <div className='div-line' />
          {profile.imhereto && (
            <React.Fragment>
              <div className='work-education'>
                <p className='text-heading'>What do you Honestly want</p>
                <p className='text-para'>{profile.imhereto}</p>
              </div>

              <div className='div-line' />
            </React.Fragment>
          )}

          <div className='work-education'>
            <p className='text-heading'>What makes you happy</p>
            <p className='text-para'>Toronto, Canada</p>
          </div>

          <div className='div-line' />
          <div className='work-education'>
            <p className='text-heading'>Personal info</p>
            {profile.aboutMe && (
              <React.Fragment>
                <div className='div-info'>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p className='info-text'>About me</p>
                  </div>
                  <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                    <p className='text-para'>{profile.aboutMe}</p>
                  </div>
                </div>
              </React.Fragment>
            )}
            {profile.Relationship && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>
                    What's your current relationship status
                  </p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>I dont know bro I am confused</p>
                </div>
              </div>
            )}
            {profile.sexuality && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>
                    How do you describe your sexual orientation
                  </p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.sexuality}</p>
                </div>
              </div>
            )}
            {profile.living && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>Who do you live with</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.living}</p>
                </div>
              </div>
            )}
            {profile.gender && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>Gender</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.gender}</p>
                </div>
              </div>
            )}
            {profile.height && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>How tall are you?</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.height}</p>
                </div>
              </div>
            )}
            {profile.bodyType && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>What's body type</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.bodyType}</p>
                </div>
              </div>
            )}
            {profile.children && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>Do you want kids?</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.children}</p>
                </div>
              </div>
            )}
            {profile.smoking && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>Do you Smoke?</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.smoking}</p>
                </div>
              </div>
            )}
            {profile.drinking && (
              <div className='div-info'>
                <div style={{ display: 'flex', flex: 1 }}>
                  <p className='info-text'>Do you drink?</p>
                </div>
                <div style={{ display: 'flex', flex: 2, paddingLeft: 15 }}>
                  <p className='text-para'>{profile.drinking}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default withRouter(
  connect(mapStateToProps, {
    getUser
  })(ViewProfileComponent)
);
