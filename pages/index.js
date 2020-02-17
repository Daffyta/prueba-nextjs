import React from 'react';
import "../scss/styles.global.scss";

// import Header from '../components/Header.js'
import Dashboard from './Dashboard.js'
// import Tabs from './Tabs.js'
// import Sidebar from '../components/Sidebar.js'
// import Navegation from '../components/Navegation.js'

import { Container, Row, Col } from 'reactstrap';

export default function Index() {
  return (
    <div>
      <Dashboard />
    </div>
  );  
}