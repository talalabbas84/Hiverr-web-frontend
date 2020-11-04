import React, {useState} from 'react'
import Header from '../../layout/Header/Header';
import './photos.css';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';



export const Photos = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageURL] = useState('')

    const getBase64 =(img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    
      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
        const  handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
        //   this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>{
            setLoading(false)
            setImageURL(imageUrl)
          }
            
            ,
            // this.setState({
            //   imageUrl,
            //   loading: false,
            // }),
          );
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
            
            <div >
            <Header/>
            </div>
            <div className='body' >
                <p1>Upload your best photos</p1>
                <p2>Adding pictures is a great way to show off your personality</p2><br></br>

                <Upload
                  className="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%'  }} /> : uploadButton}
              </Upload>
              <br></br>
              <button type="button" className=" btn-upload" >Upload</button>
              
            </div>
            <footer style={{backgroundColor:"#575757",width:"100%" , color:"#575757", }}>
                <p>hello</p>
              </footer>
        </div>
    )
}

