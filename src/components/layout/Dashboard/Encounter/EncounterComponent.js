import React, { useEffect, useState } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CrossIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

import { getUsers, swipeRight } from "../../../../actions/user";

const EncounterComponenet = ({
  getUsers,
  users,
  loading,
  swipeRight,
  user,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUsers();
  }, []);

  const swipeRightHandler = () => {
    setCount(count + 1);

    swipeRight(users.length > 0 && users[count]._id);
  };

  const swipeLeftHandler = () => {
    setCount(count + 1);
  };

  if (
    user &&
    user.user &&
    user.user._id.toString() == users[count]._id.toString()
  ) {
    setCount(count + 1);
  }
  console.log(user && user.user._id, "userrrrrrrrrrrrrrrrrrr");
  // if(users.length > 0){

  // }
  return (
    <div className="div-swiper-content">
      {user ? (
        <div className="div-swiper-content">
          <div className="div-carousel">
            <Carousel className="carousel-css">
              {users.length > 0 &&
                users[count].otherphotos.map((photo) => {
                  console.log(photo);
                  return (
                    <div style={{ height: "100vh" }}>
                      <img className="img-swiper" src={photo.url} />
                    </div>
                  );
                })}
              {/* <div style={{ height: '100vh' }}>
            <img
            className='img-swiper'
            src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            />
            </div>
            <div style={{ height: '100vh' }}>
            <img
            className='img-swiper'
            src='https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
            />
          </div> */}
            </Carousel>
            <div className="div-match-btns">
              <button className="button-match" onClick={swipeLeftHandler}>
                <CrossIcon style={{ fontSize: 40, color: "grey" }} />
              </button>
              <button className="button-match" onClick={swipeRightHandler}>
                <CheckIcon style={{ fontSize: 40, color: "blue" }} />
              </button>
            </div>
          </div>
          <div
            // style={{ paddingTop: collapsed ? 150 : 10 }}
            className="div-right-side"
          >
            <p style={{ color: "#fff", fontSize: 50 }}>
              {users.length > 0 && users[count].name}
            </p>
            <p style={{ color: "#fff", fontSize: 18, marginTop: -60 }}>
              {(users.length > 0 &&
                users[count].imhereto !== "" &&
                users.length > 0 &&
                users[count].imhereto) ||
                "Looking for date"}
            </p>
            <p style={{ color: "#fff", fontSize: 30 }}>About me</p>
            <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
              {users.length > 0 &&
                users[count].aboutMe !== "" &&
                users[count].aboutMe}
            </p>
            <p style={{ color: "#fff", fontSize: 30 }}>Personal info</p>
            {users.length > 0 &&
              users[count].Relationship !== `I'd prefer not to say` &&
              users[count].Relationship &&
              users[count].Relationship !== "" && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Relationship: {users[count].Relationship}
                </p>
              )}
            {users.length > 0 &&
              users[count].sexuality !== `I'd prefer not to say` &&
              users[count].sexuality &&
              users[count].sexuality !== "" && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Sexuality: {users[count].sexuality}
                </p>
              )}
            {users.length > 0 &&
              users[count].height !== `I'd prefer not to say` &&
              users[count].height &&
              users[count].height !== "" && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Height: {users[count].height}
                </p>
              )}
            {users.length > 0 &&
              users[count].bodyType !== `I'd prefer not to say` &&
              users[count].bodyType &&
              users[count].bodyType !== "" && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Body Type: {users[count].bodyType}
                </p>
              )}
            {users.length > 0 &&
              users[count].children !== `I'd prefer not to say` &&
              users[count].children &&
              users[count].children !== "" && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Children: {users[count].children}
                </p>
              )}
            {users.length > 0 &&
              users[count].smoking !== `I'd prefer not to say` &&
              users[count].smoking &&
              users[count].smoking !== "" && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Smoking: {users[count].smoking}
                </p>
              )}
            {users.length > 0 &&
              users[count].drinking !== `I'd prefer not to say` &&
              users[count].drinking !== "" &&
              users[count].drinking && (
                <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
                  Drinking: {users[count].drinking}
                </p>
              )}
          </div>
        </div>
      ) : (
        <div>
          <p style={{ color: "#fff", fontSize: 30 }}>NO user available</p>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  users: state.user.users,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getUsers, swipeRight })(
  EncounterComponenet
);
