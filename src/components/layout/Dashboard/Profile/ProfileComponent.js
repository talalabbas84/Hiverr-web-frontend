import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './index.css';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Select, Tag, Input } from 'antd';

const ProfileComponent = props => {
  const [previewVisible, setpreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setfileList] = useState([
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]);
  const handleCancel = () => setpreviewVisible(false);

  const handlePreview = file => {
    setPreviewImage(file.url || file.thumbUrl);
    setpreviewVisible(true);
  };

  const handleChange = ({ fileList }) => setfileList(fileList);

  const uploadButton = (
    <div>
      <PlusCircleOutlined />
      <div className='ant-upload-text'>Upload</div>
    </div>
  );

  const options = [
    { value: 'Music' },
    { value: 'Gym' },
    { value: 'Movies' },
    { value: 'Novels' },
    { value: 'Running' },
    { value: 'Party' },
    { value: 'Conversations' }
  ];
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
      <div className='div-head-profile'>
        <p className='name-text'>John Smith, 23</p>
        <div className='right-btn-div'>
          <Link to='/setting'>
            <p className='right-btns'>Setting</p>
          </Link>
          {/* <p className='right-btns'>Gallery</p> */}
          {/* <p className='right-btns'>Profile</p> */}
        </div>
      </div>
      <div className='clearfix'>
        <Upload
          action='//jsonplaceholder.typicode.com/posts/'
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 6 ? null : uploadButton}
          {/* {fileList.length >= 6 ? null : uploadButton}
            {fileList.length >= 6 ? null : uploadButton}
            {fileList.length >= 6 ? null : uploadButton}
            {fileList.length >= 6 ? null : uploadButton} */}
        </Upload>

        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
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
        </div>

        <div className='div-line' />

        <div className='work-education'>
          <p className='text-heading'>I'm here to</p>
          <p className='text-para'>Have long term commitment</p>
        </div>

        <div className='div-line' />

        <div className='work-education'>
          <p className='text-heading'>Interests</p>
          <Select
            mode='multiple'
            showArrow
            tagRender={tagRender}
            defaultValue={['Music']}
            className='select-class'
            // style={{
            //   width: "50%",
            //   marginTop: 10,
            // }}
            options={options}
          />
          <p className='done-btn'>Done</p>
        </div>

        <div className='div-line' />
        <div className='work-education'>
          <p className='text-heading'>Personal info</p>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>About me</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Input placeholder='Write a bit about yourself' />
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Relationship</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>Single</Option>
                <Option value='commited'>Commited</Option>
                <Option value='complicate'>It's complicated</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Sexuality</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>Male</Option>
                <Option value='commited'>Female</Option>
                <Option value='complicate'>Others</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Height</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Weight</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Body type</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Eye color</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Hair color</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Living</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Children</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Smoking</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className='div-info'>
            <div style={{ display: 'flex', flex: 1 }}>
              <p className='info-text'>Drinking</p>
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className='select-class'
                // onChange={handleChange}
              >
                <Option value='single'>5'1 - 5'4</Option>
                <Option value='commited'>5'5 - 5'8</Option>
                <Option value='complicate'>5'9 - 6'2</Option>
                <Option value='complicate'>I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <p className='save-btn'>Save</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
