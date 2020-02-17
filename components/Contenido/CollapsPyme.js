import React, { useState } from 'react';
import { Collapse, CardBody, Card, CardHeader, UncontrolledCollapse } from 'reactstrap';

const CollapsPyme = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="info-pyme">
      <Card>
        <CardHeader onClick={toggle}>
          <p> - Pyme 1</p>
          <span className="icon-arrow_down"></span>
        </CardHeader>
      </Card>
      <Collapse isOpen={isOpen} >
        <Card>
          <CardBody>
            <div>
              <div><b>Activos:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Pasivos:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Utilidad:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Ingreso:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
          </CardBody>
        </Card>
      </Collapse>
      
      <Card>
        <CardHeader id="pymeDos">
          <p> - Pyme 1</p>
          <span className="icon-arrow_down"></span>
        </CardHeader>
      </Card>
      <UncontrolledCollapse toggler="#pymeDos">
        <Card>
          <CardBody>
            <div>
              <div><b>Activos:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Pasivos:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Utilidad:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Ingreso:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      
      <Card>
        <CardHeader id="pymeTres">
          <p> - Pyme 1</p>
          <span className="icon-arrow_down"></span>
        </CardHeader>
      </Card>
      <UncontrolledCollapse toggler="#pymeTres">
        <Card>
          <CardBody>
            <div>
              <div><b>Activos:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Pasivos:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Utilidad:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Ingreso:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      
      <Card>
        <CardHeader id="pymeCuatro">
          <p> - Pyme 1</p>
          <span className="icon-arrow_down"></span>
        </CardHeader>
      </Card>
      <UncontrolledCollapse toggler="#pymeCuatro">
        <Card>
          <CardBody>
            <div>
              <div><b>Activos:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Pasivos:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Utilidad:</b></div>
              <div>$250,000.00 MX</div>
            </div>
            <div>
              <div><b>Ingreso:</b></div>
              <div className="left">$250,000.00 MX</div>
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default CollapsPyme;