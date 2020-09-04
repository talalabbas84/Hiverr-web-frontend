import React, { useState, Fragment } from 'react';
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
  MDBDropdownItem
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import './navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <MDBNavbar
        className='navbar-default navbar transparent navbar-inverse'
        transparent
        expand='md'
      >
        <MDBNavbarBrand className='text-center'>
          <strong className='black-text'>Hiverr</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
    </Router>
  );
};
