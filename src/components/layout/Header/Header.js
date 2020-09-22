import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn
} from 'mdbreact';
import hiverLogo from '../../../asset/images/hiver-logo.png';

const Headerr = props => {
  const [isOpen, setisOpen] = useState(false);
  const toggleCollapse = e => {
    setisOpen(!isOpen);
  };

  return (
    <Fragment>
      <MDBNavbar dark expand='md'>
        <MDBNavbarBrand className='ml-2'>
          <img style={{ width: '130px', height: '55px' }} src={hiverLogo} />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
          <MDBNavbarNav left className='mx-auto'>
            <MDBNavItem active>
              <Link to='/login'>
                <p
                  style={{
                    color: 'white',
                    marginTop: '12px',
                    marginRight: '20px'
                  }}
                >
                  Already a member?
                </p>
              </Link>
            </MDBNavItem>
            <MDBNavItem active>
              <Link to='/signup'>
                <MDBBtn size='sm' outline color='white'>
                  Join Hivrr
                </MDBBtn>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Fragment>
  );
};

export default Headerr;
