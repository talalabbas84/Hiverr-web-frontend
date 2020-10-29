import React, { useState } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import CoinImg from '../../../asset/images/coin.png';
import DiamondImg from '../../../asset/images/diamond.png';
const { Sider } = Layout;

const LeftSideBar = ({
  collapsed,
  setCollapsedHandler,
  user,
  isAuthenticated
}) => {
  // if (isAuthenticated) {
  //   return <Redirect to='/login' />;
  // }
  console.log(user);
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  // const [collapsed, setcollapsed] = useState(false);

  const toggle = () => {
    // setcollapsed(!collapsed);
    console.log(collapsed);
    setCollapsedHandler(collapsed);
    // alert("This is collapse");
  };
  const MenuItemHandler = () => {};
  return (
    <Sider
      style={{ backgroundColor: '#211C1E' }}
      collapsible={window.innerWidth > 768 ? false : true}
      collapsed={collapsed}
      onCollapse={toggle}
      // style={{
      //   overflow: 'auto',
      //   height: '100vh',
      //   position: 'fixed',
      //   left: 0
      // }}
    >
      <div className='logo' />
      <Menu
        style={{ backgroundColor: '#211C1E' }}
        theme='dark'
        defaultSelectedKeys={['/encounter']}
        mode='inline'
        selectedKeys={[pathname]}
      >
        <div className='div-avatar'>
          <img
            src={user && user.user && user.user.profilePic}
            alt='Profile Pic'
            className='avatar'
          />
          {collapsed === false ? (
            <div>
              <Link to='/profile'>
                <p style={{ color: '#fff', fontSize: 13 }}>
                  {user && user.user && user.user.name}
                </p>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ color: '#fff', fontSize: 12 }}>Popularity: </p>
                <p style={{ color: '#61A6FF', fontSize: 12, marginLeft: 5 }}>
                  Average
                </p>
              </div>
            </div>
          ) : null}
        </div>
        {!collapsed && (
          <NavLink to='/popularity'>
            <button className='btn-inc-pop'>Increase popularity </button>
          </NavLink>
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
        <Menu.Item
          style={{ margin: 0 }}
          key='/encounter'
          onClick={() => history.push('/encounter')}
        >
          {/* <NavLink to='encounter'>Encounters</NavLink> */}
          Encounters
        </Menu.Item>
        <Menu.Item
          active
          style={{ margin: 0 }}
          key='/people-nearby'
          active
          onClick={() => history.push('/people-nearby')}
        >
          {/* <NavLink to='people-nearby'>People nearby</NavLink> */}
          People Nearby
        </Menu.Item>
        <Menu.Item
          style={{ margin: 0 }}
          key='/messages'
          onClick={() => history.push('/messages')}
        >
          {/* <NavLink to='/messages'>Messages</NavLink> */}
          Messages
        </Menu.Item>
        <Menu.Item
          style={{ margin: 0 }}
          key='/matched'
          onClick={() => history.push('/matched')}
        >
          {/* <NavLink to='/matched'>Matched</NavLink> */}
          Matched
        </Menu.Item>
        <Menu.Item
          style={{ margin: 0 }}
          key='/liked-you'
          onClick={() => history.push('/liked-you')}
        >
          {/* <NavLink to='/liked-you'>Liked You</NavLink> */}
          Liked You
        </Menu.Item>
        <Menu.Item
          style={{ margin: 0 }}
          key='/visitors'
          onClick={() => history.push('/visitors')}
        >
          {/* <NavLink to='/visitors'>Visitors</NavLink> */}
          Visitors
        </Menu.Item>
        <Menu.Item
          style={{ margin: 0 }}
          key='/favourites'
          onClick={() => history.push('/favourites')}
        >
          {/* <NavLink to='/favourites'>Favourites</NavLink> */}
          Favourites
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LeftSideBar);
