import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import { withRouter } from 'react-router';
// import { connect } from 'react-redux';

import Header from '../../Header/Header';
import './photos.css';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Spinner from '../../../layout/Spinner';

import { profilePictureUpload } from '../../../../actions/user';

const SinglePhotoUpload = ({ profilePictureUpload, history, loadingg }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageURL] = useState('');
  // const [fileList, setFileList] = useState([]);
  const [test, setTest] = useState({});

  // const [test, setTest] = useState(initialState)
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    // console.log(reader.result);
    reader.readAsDataURL(img);
    // console.log(img);
    // console.log(reader.readAsDataURL(img));
    // console.log(reader.readAsDataURL(img));
    // console.log(img);
  };

  const UploadHandler = () => {
    profilePictureUpload(test, history);
  };
  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = info => {
    setTest(info.fileList[0].originFileObj);
    console.log(info.file);
    if (info.file.status === 'uploading') {
      setLoading(true);
      //   this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.fileList[0].originFileObj);
      // Get this url from response in real world.
      getBase64(
        info.file.originFileObj,
        imageUrl => {
          setLoading(false);
          setImageURL(imageUrl);
        }
        // this.setState({
        //   imageUrl,
        //   loading: false,
        // }),
      );

      // console.log(
      //   getBase64(
      //     info.file.originFileObj,
      //     imageUrl => {
      //       setLoading(false);
      //       setImageURL(imageUrl);
      //     }
      //     // this.setState({
      //     //   imageUrl,
      //     //   loading: false,
      //     // }),
      //   )
      // );
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div>
      <div>
        <Header />
      </div>
      {loadingg ? <Spinner /> : null}
      <div className='body'>
        <p1>Upload your best photos</p1>
        <p2>Adding pictures is a great way to show off your personality</p2>
        <br></br>
        <ImgCrop>
          <Upload
            className='avatar'
            listType='picture-card'
            className='avatar-uploader1'
            // fileList={fileList}
            showUploadList={false}
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            beforeUpload={beforeUpload}
            onChange={handleChange}

            // style={{ width: '100px', height: '100px' }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </ImgCrop>
        <br></br>
        {/* <Link to='/multi-photo-upload'> */}
        <button type='button' className=' btn-upload' onClick={UploadHandler}>
          Upload
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loadingg: state.user.loading
});
export default withRouter(
  connect(mapStateToProps, { profilePictureUpload })(SinglePhotoUpload)
);
