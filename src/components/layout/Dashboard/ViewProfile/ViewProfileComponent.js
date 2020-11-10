import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Upload, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Select, Tag, Input, Image } from "antd";
import HeartFilled from "@material-ui/icons/Favorite";
import Heart from "@material-ui/icons/FavoriteBorder";
import {
  multiPictureUpload,
  deletePictures,
  updateUsers,
} from "../../../../actions/user";

const ViewProfileComponent = ({
  user,
  multiPictureUpload,
  deletePictures,
  updateUsers,
}) => {
  const [favourite, setfavourite] = useState(true);
  const [previewVisible, setpreviewVisible] = useState(false);
  const [interests, setInterests] = useState([]);
  const [onepicerror, setOnepicerror] = useState(false);
  let options1 = [];
  const [previewImage, setPreviewImage] = useState("");

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
  console.log(interests, "interesssssssssssssssssst");

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
  console.log(user && user.user && user.user.imhereto, "usererererre");
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
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
      interests: whatMakesYouHappy,
    });
  };

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
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
        "https://hiverr-backend.herokuapp.com/api/v1/interest",
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
          <button
            onClick={() => setfavourite(!favourite)}
            style={{
              backgroundColor: "transparent",
              borderWidth: 0,
              marginTop: -20,
              padding: 0,
            }}
          >
            {favourite ? (
              <HeartFilled style={{ fontSize: 40, color: "red" }} />
            ) : (
              <Heart style={{ fontSize: 40, color: "red" }} />
            )}
          </button>
          <div
            style={{
              width: 1,
              height: 20,
              backgroundColor: "#fff",
              marginLeft: 10,
            }}
          />
          <Link to="/">
            <p className="right-btns">MESSAGE</p>
          </Link>

          {/* <p className='right-btns'>Gallery</p> */}
          {/* <p className='right-btns'>Profile</p> */}
        </div>
      </div>
      <div className="clearfix">
        <Image
          width={120}
          style={{ margin: 5 }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />

        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>

      {user && user.user && (
        <div className="body-div">
          <div className="work-education">
            <p className="text-heading">Work</p>
            <p className="text-para">Work detailsssss</p>
          </div>
          <div className="div-line" />

          <div className="work-education">
            <p className="text-heading">Education</p>
            <p className="text-para">Education detailssssss</p>
          </div>
          <div className="div-line" />

          <div className="work-education">
            <p className="text-heading">Location</p>
            <p className="text-para">Toronto, Canada</p>
          </div>

          <div className="div-line" />

          <div className="work-education">
            <p className="text-heading">What do you Honestly want</p>
            <p className="text-para">Good question bro</p>
          </div>

          <div className="div-line" />

          <div className="work-education">
            <p className="text-heading">What makes you happy</p>
            <p className="text-para">Toronto, Canada</p>

            {/* <p onClick={saveHandler} className="done-btn">
              Done
            </p> */}
          </div>

          <div className="div-line" />
          <div className="work-education">
            <p className="text-heading">Personal info</p>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">About me</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">WHat do you wanna know about me</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">
                  What's your current relationship status
                </p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">I dont know bro I am confused</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">
                  How do you describe your sexual orientation
                </p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">I dont wann discuss this at all</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">Who do you live with</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">With friendsss</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">Sexuality</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">Blah blah bal</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">How tall are you?</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">5'9</p>
              </div>
            </div>

            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">What's body type</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">Not bulky</p>
              </div>
            </div>

            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">Do you want kids?</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">NO just family</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">Do you Smoke?</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">If you do then yes or else no</p>
              </div>
            </div>
            <div className="div-info">
              <div style={{ display: "flex", flex: 1 }}>
                <p className="info-text">Do you drink?</p>
              </div>
              <div style={{ display: "flex", flex: 2, paddingLeft: 15 }}>
                <p className="text-para">Wallah habibi it's Haram</p>
              </div>
            </div>
            {/* <p className="save-btn" onClick={saveHandler}>
              Save
            </p> */}
          </div>
        </div>
      )}
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

export default connect(mapStateToProps, {
  multiPictureUpload,
  deletePictures,
  updateUsers,
})(ViewProfileComponent);
