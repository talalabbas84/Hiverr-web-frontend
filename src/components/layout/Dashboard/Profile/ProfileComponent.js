import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Upload, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Select, Tag, Input } from "antd";

import { multiPictureUpload, deletePictures } from "../../../../actions/user";

const ProfileComponent = ({ user, multiPictureUpload, deletePictures }) => {
  const [previewVisible, setpreviewVisible] = useState(false);
  const [interests, setInterests] = useState([]);
  const [onepicerror, setOnepicerror] = useState(false);
  let options1 = [];
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setfileList] = useState([]);
  const { TextArea } = Input;

  // useEffect(() => {}, []);
  const handleCancel = () => setpreviewVisible(false);

  if (user && user.user && user.user.otherphotos) {
    if (fileList !== user.user.otherphotos) {
      setfileList(user.user.otherphotos);
    }
  }

  const handlePreview = (file) => {
    // console.log(file, 'dsdasdassda');
    setPreviewImage(file.url || file.thumbUrl);
    setpreviewVisible(true);
  };

  const handleChange = ({ fileList }) => {
    // console.log(fileList[fileList.length - 1].originFileObj);
    // console.log('how many time is it coing here');

    setfileList(fileList);
  };

  const removeHandler = (e) => {
    console.log(e.url, "removeeeeeeeee pictire");
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
  const beforeUploadHandler = (e) => {
    console.log(e, "this is before upload");
    multiPictureUpload(e);
  };

  const uploadButton = (
    <div>
      <PlusCircleOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
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
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "ttps://hiverr-backend.herokuapp.com/api/v1/interest",
        config
      );
      setInterests(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    getInterests();
  }, []);

  console.log(interests);
  console.log(fileList, "filelistttttt");

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
    interests.data.map((interest) => {
      console.log(interest);
      options1.push({ value: interest.name });
    });
  }

  console.log(options1, "optionss");
  const { Option } = Select;
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    return (
      <Tag
        color={value}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3, backgroundColor: "#575757" }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <div className="div-swiper-content-profile">
      {onepicerror && (
        <p style={{ color: "red", fontWeight: "bold", alignContent: "center" }}>
          You can't remove all pictures. One picture is necessary
        </p>
      )}
      <div className="div-head-profile">
        <p className="name-text">{user && user.user && user.user.name}, 23</p>
        <div className="right-btn-div">
          <Link to="/setting">
            <p className="right-btns">Setting</p>
          </Link>
          {/* <p className='right-btns'>Gallery</p> */}
          {/* <p className='right-btns'>Profile</p> */}
        </div>
      </div>
      <div className="clearfix">
        {user && user.user && user.user.otherphotos && (
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
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
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
      <div className="body-div">
        <div className="div-popularity">
          <div className="popularity-content">
            <p className="text1">Popularity</p>
            <ArrowUpOutlined className="icon-up" />
            <p className="text3">Increase</p>
          </div>
          <div className="popularity-content">
            <p className="text1">Credits</p>
            <p className="text2">0</p>
            <p className="text3">Buy</p>
          </div>
          <div className="popularity-content">
            <p className="text1">Hivrr Premium</p>
            <p className="text2">0</p>
            <p className="text3">Activate</p>
          </div>
        </div>
        <div className="div-line" />
        <div className="work-education">
          <p className="text-heading">Work & Education</p>
          <p className="text-para">
            Tell people more about yourself by adding your work and education
            details
          </p>
          <p className="add-now">Add now</p>
        </div>

        <div className="div-line" />

        <div className="work-education">
          <p className="text-heading">Location</p>
          <p className="text-para">Toronto, Canada</p>
          <Input style={{ width: 405 }} placeholder="Toronto, Canada" />
        </div>

        <div className="div-line" />

        <div className="work-education">
          <p className="text-heading">What do you Honestly want</p>
          <Select
            defaultValue="I'm here to"
            className="select-class"
            // onChange={handleChange}
          >
            <Option value="Newpeople">To meet new people</Option>
            <Option value="Whathappen">To see what happens</Option>
            <Option value="Todate">To date </Option>
            <Option value="Todateseriously">To date Seriously</Option>
            <Option value="Longtermcommitment">
              To make a long term commitment
            </Option>
          </Select>
        </div>

        <div className="div-line" />

        <div className="work-education">
          <p className="text-heading">What makes you happy</p>
          <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            // defaultValue={['Music']}
            className="select-class"
            // style={{
            //   width: "50%",
            //   marginTop: 10,
            // }}
            options={options1}
          />
          <p className="done-btn">Done</p>
        </div>

        <div className="div-line" />
        <div className="work-education">
          <p className="text-heading">Personal info</p>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">About me</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <TextArea rows={4} placeholder="Write a bit about yourself" />
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">
                What's your current relationship status
              </p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="single">Single</Option>
                <Option value="taken">Taken</Option>
                <Option value="complicate">It's complicated</Option>
                <Option value="open">Open</Option>

                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">
                How do you describe your sexual orientation
              </p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="straight">Straight</Option>
                <Option value="gay">Gay</Option>
                <Option value="lesbain">Lesbian</Option>
                <Option value="bisexual">Bisexual</Option>
                <Option value="asexual">Asexual</Option>
                <Option value="demisexual">Demisexual</Option>
                <Option value="pansexual">Pansexual</Option>
                <Option value="queer">Queer</Option>
                <Option value="questioning">Questioning</Option>
                <Option value="complicate">I'd rather not say </Option>
              </Select>
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Who do you live with</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="alonelive">Alone</Option>
                <Option value="familylive">Family</Option>
                <Option value="partnerlive">Partner</Option>
                <Option value="studentlive">Student accommodation</Option>
                <Option value="friendlive">Friends</Option>
                <Option value="otherlive">other</Option>

                <Option value="complicate">I'd rather not say </Option>
              </Select>
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Sexuality</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="single">Male</Option>
                <Option value="commited">Female</Option>
                <Option value="complicate">Others</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">How tall are you?</p>
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
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text"> What's body type</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="average">Average</Option>
                <Option value="athletic">Athletic</Option>
                <Option value="slim">Slim</Option>
                <Option value="curvy">Curvy</Option>

                <Option value="complicate">I'd prefer not to say</Option>
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
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Do you want kids?</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="somedaykid">I'd like them someday</Option>
                <Option value="soonkid">I'd like them soon</Option>
                <Option value="nokid">I don't want kids</Option>
                <Option value="havekid">I already have kids</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Do you Smoke?</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="yessmoke">Yes</Option>
                <Option value="nosmoke">No</Option>
                <Option value="ocassionallysmoke">Ocassionally</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <div className="div-info">
            <div style={{ display: "flex", flex: 1 }}>
              <p className="info-text">Do you drink?</p>
            </div>
            <div style={{ display: "flex", flex: 2 }}>
              <Select
                defaultValue="I'd prefer not to say"
                className="select-class"
                // onChange={handleChange}
              >
                <Option value="yesdrink">Yes</Option>
                <Option value="nodrink">No</Option>
                <Option value="ocassionallydrink">Ocassionally</Option>
                <Option value="complicate">I'd prefer not to say</Option>
              </Select>
            </div>
          </div>
          <p className="save-btn">Save</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // errors: state.authReducer.errors,
  // isVerified: state.authReducer.isVerified,
  // loading: state.authReducer.loading,
  // user: state.authReducer.user,
  // token: state.authReducer.token
  user: state.auth.user,
});

export default connect(mapStateToProps, { multiPictureUpload, deletePictures })(
  ProfileComponent
);
