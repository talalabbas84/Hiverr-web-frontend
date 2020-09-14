import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './index.css';
import 'antd/dist/antd.css';
import LeftSideBar from './LeftSideBar';
import Encounter from './Encounter/Encounter';
import PeopleNearbyComponent from './PeopleNearby/PeopleNearbyComponent';
import HivrrLogoText from '../../../asset/images/HivrrLogoText.png';

const Dashboard = ({ children }) => {
  const [collapsed, setcollapsed] = useState(true);

  const setCollapsedHandler = collapsed => {
    setcollapsed(!collapsed);
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
        style={{
          width: collapsed ? 70 : 170,
          marginLeft: collapsed ? 4 : 10
        }}
        className='div-line'
      ></div>
      <Layout
        // className="layout-css"
        style={{ minHeight: '100vh', backgroundColor: '#211C1E' }}
      >
        <LeftSideBar
          collapsed={collapsed}
          setCollapsedHandler={setCollapsedHandler}
        />

        {children}
      </Layout>
    </div>
  );
};

export default Dashboard;
