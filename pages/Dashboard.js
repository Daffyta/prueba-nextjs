import Chart from '../components/Contenido/Chart.js';
import InformativeCard from '../components/Contenido/InformativeCard.js';
import Notifications from '../components/Contenido/Notifications.js';
import CollapsPyme from '../components/Contenido/CollapsPyme.js';
import Sidebar from '../components/Sidebar.js'
import Navegation from '../components/Navegation.js'

import { Container, Row, Col } from 'reactstrap';

const Dashboard = () => (
  
  <div className="container-fluid">
    <Row>
      <Col md="3" className="pad-left">
        <Sidebar />
      </Col>
      <Col md="9">
        <Navegation />
        <Container fluid={true}>
          <Row>
            <Col xs="12" sm="8"> 
              <Chart />
            </Col>
            <Col xs="12" sm='4'>
              <InformativeCard />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <Notifications />
            </Col>
            <Col xs="12" lg="6">
              <CollapsPyme />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </div>
);

export default Dashboard