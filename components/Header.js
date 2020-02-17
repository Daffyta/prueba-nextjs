import Sidebar from './Sidebar.js'
import Navegation from './Navegation.js'

import { Container, Row, Col } from 'reactstrap';

export default function Header() {
  return (
    <div>
      <Row>
        <Col md="3">
          <Sidebar />
        </Col>
        <Col md="9">
          <Navegation />
        </Col>
      </Row>
    </div>
  );
}