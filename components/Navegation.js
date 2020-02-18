import notificacionesSVG from '../assets/img/notifications.svg'
import settingsSVG from '../assets/img/settings.svg'

import '../scss/components/navegation.scss'

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Link from 'next/link';
import Sidebar from './Sidebar.js'


const Navegation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" light className="navbar">
        <div className="d-flex align-items-center">
          <NavbarBrand href="/" className="navbar-brand" >
            <h5>Dashboard</h5>
          </NavbarBrand>
          <div className="d-flex">
            <NavItem>
              <NavLink href="/"><img src={notificacionesSVG} alt="notifications" width="21px" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><img src={settingsSVG} alt="settings" width="25px"/></NavLink>
            </NavItem>
          </div>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar  className="d-block d-sm-none">
              <Sidebar />
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegation;