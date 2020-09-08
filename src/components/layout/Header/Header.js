import React, { Fragment, useState } from 'react';
import './index.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn
} from 'mdbreact';
import hiverLogo from '../../../asset/images/hiver-logo.png';

const Headerr = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleCollapse = e => {
    setisOpen(!isOpen);
  };
  return (
    <Fragment>
      <MDBNavbar dark expand='md'>
        <MDBNavbarBrand className='ml-2'>
          <img style={{ width: '100px', height: '55px' }} src={hiverLogo} />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
          <MDBNavbarNav left className='mx-auto'>
            <MDBNavItem active>
              <p
                style={{
                  color: 'white',
                  marginTop: '12px',
                  marginRight: '20px'
                }}
              >
                Already a member?
              </p>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBBtn size='sm' outline color='white'>
                Join Hiverr
              </MDBBtn>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Fragment>
  );
};

export default Headerr;
