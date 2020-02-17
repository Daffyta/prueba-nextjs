import userPNG from '../assets/img/user.png'

import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <p><img src={userPNG} alt="user" width="80%" /></p>
      <h3>LOREM IPSUM</h3>
      <hr />
      <Nav vertical>
        <NavItem>
          <NavLink href="/" as={`${process.env.ASSET_PREFIX}/`}>Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Tabs" as={`${process.env.ASSET_PREFIX}/Tabs`}>Tabs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Sidebar;