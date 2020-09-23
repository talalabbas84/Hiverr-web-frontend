import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom';

const GalleryComponent = () => {
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
  return (
    <MDBContainer className='div-main-cont'>
      <div className='div-head-profile'>
        <p className='name-text'>John Smith, 23</p>
        <div className='right-btn-div'>
          <Link to='/setting'>
            <p className='right-btns'>Setting</p>
          </Link>
          <p className='right-btns'>Gallery</p>
          {/* <p className='right-btns'>Profile</p> */}
        </div>
      </div>
      <div>
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

          {/* <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt='example' style={{ width: '100%' }} src={previewImage} />
          </Modal> */}
        </div>
      </div>
    </MDBContainer>
  );
};

export default GalleryComponent;
