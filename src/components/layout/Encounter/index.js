import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import "antd/dist/antd.css";
import HivrrLogoText from "../../../asset/images/HivrrLogoText.png";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Encounter = () => {
  const [collapsed, setcollapsed] = useState(false);
  const toggle = () => {
    setcollapsed(!collapsed);
  };

  return (
    <div
      style={{
        backgroundColor: "#211C1E",
        paddingLeft: "20%",
        paddingRight: "20%",
        backgroundColor: "#211C1E",
        paddingBottom: 50,
      }}
    >
      <img src={HivrrLogoText} alt="Logo" className="logo-Hivrr" />
      <Layout style={{ minHeight: "100vh", backgroundColor: "#211C1E" }}>
        <Sider
          style={{ backgroundColor: "#211C1E" }}
          collapsible
          collapsed={collapsed}
          onCollapse={setcollapsed}
        >
          <div className="logo" />
          <Menu
            style={{ backgroundColor: "#211C1E" }}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <div
              style={{
                width: "100%",
                height: 100,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112"
                alt="Logo"
                className="avatar"
              />
              <div>
                <p style={{ color: "#fff", fontSize: 13 }}>Jessica jones</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ color: "#fff", fontSize: 12 }}>Popularity: </p>
                  <p style={{ color: "#61A6FF", fontSize: 12 }}> Average</p>
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "#6E48DB",
                width: "80%",
                height: 35,
                borderRadius: 13,
                borderWidth: 0,
                marginTop: -15,
                marginBottom: 20,
              }}
            >
              Increase popularity
            </button>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu
              style={{ backgroundColor: "#211C1E" }}
              key="sub1"
              icon={<UserOutlined />}
              title="User"
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <div
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#fff",
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            // marginTop: -50,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              overflow: "hidden",
              //   backgroundColor: "pink",
            }}
          >
            <Carousel className="carousel-css">
              <div style={{ height: "100vh" }}>
                <img
                  className="img-swiper"
                  src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112"
                />
              </div>
              <div style={{ height: "100vh" }}>
                <img
                  className="img-swiper"
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                />
              </div>
              <div style={{ height: "100vh" }}>
                <img
                  className="img-swiper"
                  src="https://professorly.herokuapp.com/uploads/no-photo.jpg"
                />
              </div>
            </Carousel>
          </div>
          <div className="div-right-side">
            <p style={{ color: "#fff", fontSize: 50 }}>Julie</p>
            <p style={{ color: "#fff", fontSize: 18, marginTop: -60 }}>
              Looking for date
            </p>
            <p style={{ color: "#fff", fontSize: 30 }}>About me</p>
            <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
              I am self obsessed, I love singing
            </p>
            <p style={{ color: "#fff", fontSize: 30 }}>Personal info</p>
            <p style={{ color: "#fff", fontSize: 18, marginTop: -30 }}>
              Relationship: I'm single
            </p>
            <p style={{ color: "#fff", fontSize: 18, marginTop: -20 }}>
              Sexuality: I'm straight
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Encounter;
