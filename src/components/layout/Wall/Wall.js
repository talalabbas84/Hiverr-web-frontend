import React ,{useState} from 'react';
import Header from '../../layout/Header/Header';
import './Wall.css';
import { Upload, Modal } from 'antd';
import Icon from '@ant-design/icons';


export const Wall = () => {
   const [previewVisible, setpreviewVisible] = useState('')
   const [previewImage, setpreviewImage] = useState('')
   const [fileList, setfileList] = useState('')
    


    const handleCancel = () => setpreviewVisible(false);

   const handlePreview = (file) => {
       setpreviewImage(file.url || file.thumbUrl)
       setpreviewVisible(true)
     
        
    }

    const handleChange = ({ fileList }) => setfileList(fileList);

    const uploadButton = (
        <div>
          <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
        </div>
      );
    return (
        <div>
            <div><Header/></div>
            <div style={{background:'red ' ,display:'flex'}}>
            <div className="clearfix">
            <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            >
            {fileList.length >= 3 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
        </div>
        </div>
    )
}
