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
          <Link href={ '/' } as={ process.env.BACKEND_URL + '/' }><a className="active-tab">Dashboard</a></Link>
        </NavItem>
        <NavItem>
          <Link href={ '/Tabs' } as={ process.env.BACKEND_URL + '/Tabs' }><a className="active-tab">Tabs</a></Link>
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