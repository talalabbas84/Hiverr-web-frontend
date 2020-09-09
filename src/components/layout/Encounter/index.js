import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css';
import 'antd/dist/antd.css';
import HivrrLogoText from '../../../asset/images/HivrrLogoText.png';
import CoinImg from '../../../asset/images/coin.png';
import DiamondImg from '../../../asset/images/diamond.png';

const { Header, Content, Footer, Sider } = Layout;

const Encounter = () => {
  const [collapsed, setcollapsed] = useState(true);
  const toggle = () => {
    setcollapsed(!collapsed);
    // alert("This is collapse");
  };

  return (
    <div className='div-main'>
      <img
        src={HivrrLogoText}
        alt='Logo'
        style={{ width: collapsed ? 80 : 200 }}
        className='logo-Hivrr'
      />
      <div
        style={{ width: collapsed ? 70 : 170, marginLeft: collapsed ? 4 : 10 }}
        className='div-line'
      ></div>
      <Layout
        // className="layout-css"
        style={{ minHeight: '100vh', backgroundColor: '#211C1E' }}
      >
        <Sider
          style={{ backgroundColor: '#211C1E' }}
          collapsible
          collapsed={collapsed}
          onCollapse={toggle}
        >
          <div className='logo' />
          <Menu
            style={{ backgroundColor: '#211C1E' }}
            theme='dark'
            defaultSelectedKeys={['1']}
            mode='inline'
          >
            <div className='div-avatar'>
              <img
                src='https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
                alt='Logo'
                className='avatar'
              />
              {collapsed === false ? (
                <div>
                  <p style={{ color: '#fff', fontSize: 13 }}>Jessica jones</p>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ color: '#fff', fontSize: 12 }}>Popularity: </p>
                    <p
                      style={{ color: '#61A6FF', fontSize: 12, marginLeft: 5 }}
                    >
                      {' '}
                      Average
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
            {!collapsed && (
              <button className='btn-inc-pop'>Increase popularity</button>
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: collapsed ? 'column' : 'row'
              }}
              className='div-content'
            >
              <div className='div-coin-diamond'>
                <div className='coin-div'>
                  <img src={CoinImg} style={{ width: 20, height: 20 }} />
                </div>
                <p style={{ color: '#fff', marginTop: 10, fontSize: 12 }}>
                  Credits
                </p>
                <button className='button-coin'>Add Credits</button>
              </div>
              <div className='div-coin-diamond'>
                <div className='coin-div'>
                  <img src={DiamondImg} style={{ width: 20, height: 20 }} />
                </div>
                <p style={{ color: '#fff', marginTop: 10, fontSize: 12 }}>
                  Hivrr Premium
                </p>
                <button className='button-coin'>Activate</button>
              </div>
            </div>
            <Menu.Item style={{ margin: 0 }} key='1'>
              Encounters
            </Menu.Item>
            <Menu.Item style={{ margin: 0 }} key='2'>
              People nearby
            </Menu.Item>
            <Menu.Item style={{ margin: 0 }} key='3'>
              Messages
            </Menu.Item>
            <Menu.Item style={{ margin: 0 }} key='4'>
              Matched
            </Menu.Item>
            <Menu.Item style={{ margin: 0 }} key='5'>
              Liked you
            </Menu.Item>
            <Menu.Item style={{ margin: 0 }} key='6'>
              Visitors
            </Menu.Item>
            <Menu.Item style={{ margin: 0 }} key='7'>
              Favourites
            </Menu.Item>
          </Menu>
        </Sider>
        <div className='div-swiper-content'>
          <div className='div-carousel'>
            <Carousel className='carousel-css'>
              <div style={{ height: '100vh' }}>
                <img
                  className='img-swiper'
                  src='https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/Jessica_Jones_Season_2_Promotional.png/revision/latest?cb=20180626040112'
                />
              </div>
              <div style={{ height: '100vh' }}>
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
              </div>
            </Carousel>
          </div>
          <div
            style={{ paddingTop: collapsed ? 10 : 150 }}
            className='div-right-side'
          >
            <p style={{ color: '#fff', fontSize: 50 }}>Julie</p>
            <p style={{ color: '#fff', fontSize: 18, marginTop: -60 }}>
              Looking for date
            </p>
            <p style={{ color: '#fff', fontSize: 30 }}>About me</p>
            <p style={{ color: '#fff', fontSize: 18, marginTop: -30 }}>
              I am self obsessed, I love singing
            </p>
            <p style={{ color: '#fff', fontSize: 30 }}>Personal info</p>
            <p style={{ color: '#fff', fontSize: 18, marginTop: -30 }}>
              Relationship: I'm single
            </p>
            <p style={{ color: '#fff', fontSize: 18, marginTop: -20 }}>
              Sexuality: I'm straight
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Encounter;
