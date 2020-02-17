import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import Header from '../components/Header.js'
import Tabla from '../components/Contenido/Tabla.js';
import Formulario from '../components/Contenido/Formulario.js';
import Tarjetas from '../components/Contenido/Tarjetas.js';

import Sidebar from '../components/Sidebar.js'
import Navegation from '../components/Navegation.js'

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container-fluid" id="menu-tabs">
      <Row>
        <Col md="3" className="pad-left">
          <Sidebar />
        </Col>
        <Col md="9">
          <Navegation />
          <Container fluid={true}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  Tabla
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  Cards
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Formulario />
                    <Tabla />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Tarjetas />
              </TabPane>
            </TabContent>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Tabs;

