import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Upload, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './index.css';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Select, Tag, Input } from 'antd';

import {
  multiPictureUpload,
  deletePictures,
  updateUsers
} from '../../../../actions/user';

const ProfileComponent = ({
  user,
  multiPictureUpload,
  deletePictures,
  updateUsers
}) => {
  const [previewVisible, setpreviewVisible] = useState(false);
  const [interests, setInterests] = useState([]);
  const [onepicerror, setOnepicerror] = useState(false);
  let options1 = [];
  const [previewImage, setPreviewImage] = useState('');

  const [aboutMe, setAboutMe] = useState(
    user && user.user && user.user.aboutMe
  );
  const [Relationship, setRelationship] = useState(
    user && user.user && user.user.Relationship
  );
  const [sexuality, setSexuality] = useState(
    user && user.user && user.user.sexuality
  );
  const [living, setLiving] = useState(user && user.user && user.user.living);
  const [gender, setGender] = useState(user && user.user && user.user.gender);
  const [height, setHeight] = useState(user && user.user && user.user.height);
  const [bodyType, setBodyType] = useState(
    user && user.user && user.user.bodyType
  );
  const [children, setChildren] = useState(
    user && user.user && user.user.children
  );
  const [smoking, setSmoking] = useState(
    user && user.user && user.user.smoking
  );
  const [drinking, setDrinking] = useState(
    user && user.user && user.user.drinking
  );
  const [imhereto, setImhereto] = useState(
    user && user.user && user.user.imhereto
  );
  const [whatMakesYouHappy, setWhatMakesYouHappy] = useState(
    user && user.user && user.user.interests
  );

  const [fileList, setfileList] = useState([]);
  const { TextArea } = Input;
  const [fieldsToUpdate, setFieldsToUpdate] = useState({});

  // useEffect(() => {}, []);
  const handleCancel = () => setpreviewVisible(false);
  console.log(interests, 'interesssssssssssssssssst');

  if (user && user.user && user.user.otherphotos) {
    if (fileList !== user.user.otherphotos) {
      setfileList(user.user.otherphotos);
    }
  }

  const handlePreview = file => {
    // console.log(file, 'dsdasdassda');
    setPreviewImage(file.url || file.thumbUrl);
    setpreviewVisible(true);
  };

  const handleChange = ({ fileList }) => {
    setfileList(fileList);
  };

  const removeHandler = e => {
    console.log(e.url, 'removeeeeeeeee pictire');
    if (fileList.length > 1) {
      deletePictures(e.url);
      setOnepicerror(false);
    } else {
      setOnepicerror(true);
      setTimeout(() => {
        setOnepicerror(false);
      }, 1500);
    }
  };
  const beforeUploadHandler = e => {
    console.log(e, 'this is before upload');
    multiPictureUpload(e);
  };

  const uploadButton = (
    <div>
      <PlusCircleOutlined />
      <div className='ant-upload-text'>Upload</div>
    </div>
  );
  console.log(user && user.user && user.user.imhereto, 'usererererre');
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const saveHandler = () => {
    updateUsers({
      aboutMe: aboutMe || user.user.aboutMe,
      Relationship: Relationship || user.user.Relationship,
      sexuality: sexuality || user.user.sexuality,

      living: living || user.user.living,
      // gender,
      height: height || user.user.height,
      bodyType: bodyType || user.user.bodyType,
      children: children || user.user.children,
      smoking: smoking || user.user.smoking,
      drinking: drinking || user.user.drinking,
      imhereto: imhereto || user.user.imhereto,
      interests: whatMakesYouHappy
    });
  };

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  const getInterests = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.get(
        'https://hiverr-backend.herokuapp.com/api/v1/interest',
        config
      );
      setInterests(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    getInterests();
  }, []);

  console.log(interests);
  console.log(fileList, 'filelistttttt');

  // const options = [
  //   { value: 'Music' },
  //   { value: 'Gym' },
  //   { value: 'Movies' },
  //   { value: 'Novels' },
  //   { value: 'Running' },
  //   { value: 'Party' },
  //   { value: 'Conversations' }
  // ];

  if (interests.data && interests.data.length > 0) {
    interests.data.map(interest => {
      console.log(interest);
      options1.push({ value: interest.name });
    });
  }

  console.log(options1, 'optionss');
  const { Option } = Select;
  const tagRender = props => {
    const { label, value, closable, onClose } = props;
    return (
      <Tag
        color={value}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3, backgroundColor: '#575757' }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <div className='div-swiper-content-profile'>
      {onepicerror && (
        <p style={{ color: 'red', fontWeight: 'bold', alignContent: 'center' }}>
          You can't remove all pictures. One picture is necessary
        </p>
      )}
      <div className='div-head-profile'>
        <p className='name-text'>{user && user.user && user.user.name}, 23</p>
        <div className='right-btn-div'>
          <Link to='/setting'>
            <p className='right-btns'>Setting</p>
          </Link>
          {/* <p className='right-btns'>Gallery</p> */}
          {/* <p className='right-btns'>Profile</p> */}
        </div>
      </div>
      <div className='clearfix'>
        {user && user.user && user.user.otherphotos && (
          <Upload
            action='//jsonplaceholder.typicode.com/posts/'
            listType='picture-card'
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            onRemove={removeHandler}
            beforeUpload={beforeUploadHandler}
          >
            {fileList.length >= 3 ? null : uploadButton}
            {/* {fileList.length >= 6 ? null : uploadButton}
            {fileList.length >= 6 ? null : uploadButton}
            {fileList.length >= 6 ? null : uploadButton}
            {fileList.length >= 6 ? null : uploadButton} */}
          </Upload>
        )}

        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>

      {user && user.user && (
        <div className='body-div'>
          <div className='div-popularity'>
            <div className='popularity-content'>
              <p className='text1'>Popularity</p>
              <ArrowUpOutlined className='icon-up' />
              <p className='text3'>Increase</p>
            </div>
            <div className='popularity-content'>
              <p className='text1'>Credits</p>
              <p className='text2'>0</p>
              <p className='text3'>Buy</p>
            </div>
            <div className='popularity-content'>
              <p className='text1'>Hivrr Premium</p>
              <p className='text2'>0</p>
              <p className='text3'>Activate</p>
            </div>
          </div>
          <div className='div-line' />
          <div className='work-education'>
            <p className='text-heading'>Work & Education</p>
            <p className='text-para'>
              Tell people more about yourself by adding your work and education
              details
            </p>
            <p className='add-now'>Add now</p>
          </div>

          <div className='div-line' />

          <div className='work-education'>
            <p className='text-heading'>Location</p>
            <p className='text-para'>Toronto, Canada</p>
            {/* <Input style={{ width: 405 }} placeholder='Toronto, Canada' /> */}
          </div>

          <div className='div-line' />

          <div className='work-education'>
            <p className='text-heading'>What do you Honestly want</p>
            <Select
              // defaultValue={defaultValue={user && user.user && user.user.imhereto}
              defaultValue={user && user.user && user.user.imhereto}
              className='select-class'
              // onChange={handleChange}
              onChange={e => setImhereto(e)}
            >
              <Option value='To meet new people'>To meet new people</Option>
              <Option value='To see what happens'>To see what happens</Option>
              <Option value='To date'>To date </Option>
              <Option value='To date Seriously'>To date Seriously</Option>
              <Option value='To make a long term commitment'>
                To make a long term commitment
              </Option>
            </Select>
          </div>

          <div className='div-line' />

          <div className='work-education'>
            <p className='text-heading'>What makes you happy</p>
            <Select
              mode='multiple'
              showArrow
              tagRender={tagRender}
              // defaultValue={['Music']}
              onChange={e => setWhatMakesYouHappy}
              defaultValue={user && user.user && user.user.interests}
              className='select-class'
              // style={{
              //   width: "50%",
              //   marginTop: 10,
              // }}
              options={options1}
            />
            <p onClick={saveHandler} className='done-btn'>
              Done
            </p>
          </div>

          <div className='div-line' />
          <div className='work-education'>
            <p className='text-heading'>Personal info</p>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>About me</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <TextArea
                  onChange={e => setAboutMe(e.target.value)}
                  defaultValue={user && user.user && user.user.aboutMe}
                  rows={4}
                  placeholder='Write a bit about yourself'
                />
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>
                  What's your current relationship status
                </p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  // defaultValue="I'd prefer not to say"
                  defaultValue={user && user.user && user.user.Relationship}
                  className='select-class'
                  // onChange={handleChange}
                  onChange={e => setRelationship(e)}
                >
                  <Option value='Single'>Single</Option>
                  <Option value='Taken'>Taken</Option>
                  <Option value={`It's complicate`}>It's complicated</Option>
                  <Option value='Open'>Open</Option>

                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>
                  How do you describe your sexual orientation
                </p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.sexuality}
                  className='select-class'
                  onChange={e => setSexuality(e)}
                  // onChange={handleChange}
                >
                  <Option value='Straight'>Straight</Option>
                  <Option value='Gay'>Gay</Option>
                  <Option value='Lesbain'>Lesbian</Option>
                  <Option value='Bisexual'>Bisexual</Option>
                  <Option value='Asexual'>Asexual</Option>
                  <Option value='Demisexual'>Demisexual</Option>
                  <Option value='Pansexual'>Pansexual</Option>
                  <Option value='Queer'>Queer</Option>
                  <Option value='Questioning'>Questioning</Option>
                  <Option value={`I'd rather not say`}>
                    I'd rather not say
                  </Option>
                </Select>
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>Who do you live with</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.living}
                  className='select-class'
                  // onChange={handleChange}
                  onChange={e => setLiving(e)}
                >
                  <Option value='Alone'>Alone</Option>
                  <Option value='Family'>Family</Option>
                  <Option value='Partner'>Partner</Option>
                  <Option value='Student accommodation'>
                    Student accommodation
                  </Option>
                  <Option value='Friends'>Friends</Option>
                  <Option value='other'>other</Option>

                  <Option value={`I'd rather not say`}>
                    I'd rather not say
                  </Option>
                </Select>
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>Sexuality</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.gender}
                  className='select-class'
                  onChange={e => setGender(e)}
                  // onChange={handleChange}
                >
                  <Option value='Male'>Male</Option>
                  <Option value='Female'>Female</Option>
                  <Option value='Others'>Others</Option>
                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>How tall are you?</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.height}
                  className='select-class'
                  onChange={e => setHeight(e)}
                  // onChange={handleChange}
                >
                  <Option value={`5'1 - 5'4`}>5'1 - 5'4</Option>
                  <Option value={`5'5 - 5'8`}>5'5 - 5'8</Option>
                  <Option value={`5'9 - 6'2`}>5'9 - 6'2</Option>
                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            {/* <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Weight</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="single">5'1 - 5'4</Option>
                <Option value="commited">5'5 - 5'8</Option>
                <Option value="complicate">5'9 - 6'2</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div> */}
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'> What's body type</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.bodyType}
                  className='select-class'
                  // onChange={handleChange}
                  onChange={e => setBodyType(e)}
                >
                  <Option value='Average'>Average</Option>
                  <Option value='Athletic'>Athletic</Option>
                  <Option value='Slim'>Slim</Option>
                  <Option value='Curvy'>Curvy</Option>

                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            {/* <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Eye color</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="single">5'1 - 5'4</Option>
                <Option value="commited">5'5 - 5'8</Option>
                <Option value="complicate">5'9 - 6'2</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div> */}
            {/* <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Hair color</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="single">5'1 - 5'4</Option>
                <Option value="commited">5'5 - 5'8</Option>
                <Option value="complicate">5'9 - 6'2</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div> */}
            {/* <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Living</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="single">5'1 - 5'4</Option>
                <Option value="commited">5'5 - 5'8</Option>
                <Option value="complicate">5'9 - 6'2</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div> */}
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>Do you want kids?</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.children}
                  className='select-class'
                  onChange={e => setChildren(e)}
                  // onChange={handleChange}
                >
                  <Option value='Id like them someday'>
                    I'd like them someday
                  </Option>
                  <Option value={`I'd like them soo`}>
                    I'd like them soon
                  </Option>
                  <Option value={`I don't want kids`}>I don't want kids</Option>
                  <Option value='I already have kids'>
                    I already have kids
                  </Option>
                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>Do you Smoke?</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.smoking}
                  className='select-class'
                  onChange={e => setSmoking(e)}
                  // onChange={handleChange}
                >
                  <Option value='Yes'>Yes</Option>
                  <Option value='No'>No</Option>
                  <Option value='Ocassionally'>Ocassionally</Option>
                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            <div className='div-info'>
              <div style={{ display: 'flex', flex: 1 }}>
                <p className='info-text'>Do you drink?</p>
              </div>
              <div style={{ display: 'flex', flex: 2 }}>
                <Select
                  defaultValue={user && user.user && user.user.drinking}
                  className='select-class'
                  onChange={e => setDrinking(e)}
                  // onChange={handleChange}
                >
                  <Option value='Yes'>Yes</Option>
                  <Option value='No'>No</Option>
                  <Option value='Ocassionally'>Ocassionally</Option>
                  <Option value={`I'd prefer not to say`}>
                    I'd prefer not to say
                  </Option>
                </Select>
              </div>
            </div>
            <p className='save-btn' onClick={saveHandler}>
              Save
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  // errors: state.authReducer.errors,
  // isVerified: state.authReducer.isVerified,
  // loading: state.authReducer.loading,
  // user: state.authReducer.user,
  // token: state.authReducer.token
  user: state.auth.user
});

export default connect(mapStateToProps, {
  multiPictureUpload,
  deletePictures,
  updateUsers
})(ProfileComponent);
