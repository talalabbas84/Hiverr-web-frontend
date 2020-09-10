import React, { useState } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import CoinImg from '../../../asset/images/coin.png';
import DiamondImg from '../../../asset/images/diamond.png';
const { Sider } = Layout;

const LeftSideBar = ({ collapsed, setCollapsedHandler }) => {
  // const [collapsed, setcollapsed] = useState(true);

  const toggle = () => {
    // setcollapsed(!collapsed);
    console.log(collapsed);
    setCollapsedHandler(collapsed);
    // alert("This is collapse");
  };
  return (
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
                <p style={{ color: '#61A6FF', fontSize: 12, marginLeft: 5 }}>
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
  );
};

export default LeftSideBar;
