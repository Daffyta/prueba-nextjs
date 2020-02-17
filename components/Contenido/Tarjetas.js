import pranchetaPNG from '../../assets/img/prancheta.png'
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Tarjetas = (props) => {
  return (
    <div>
      <Card body className="text-center">
        <img src={pranchetaPNG} alt="multitud" width="80px" />
        <CardText>Pymes registradas en Visor. Lorem ipsum dolor sit amet.</CardText>
      </Card>
      <Card body className="text-center">
        <img src={pranchetaPNG} alt="multitud" width="80px" />
        <CardText>Pymes registradas en Visor. Lorem ipsum dolor sit amet.</CardText>
      </Card>
      <Card body className="text-center">
        <img src={pranchetaPNG} alt="multitud" width="80px" />
        <CardText>Pymes registradas en Visor. Lorem ipsum dolor sit amet.</CardText>
      </Card>
      <Card body className="text-center">
        <img src={pranchetaPNG} alt="multitud" width="80px" />
        <CardText>Pymes registradas en Visor. Lorem ipsum dolor sit amet.</CardText>
      </Card>
      <Card body className="text-center">
        <img src={pranchetaPNG} alt="multitud" width="80px" />
        <CardText>Pymes registradas en Visor. Lorem ipsum dolor sit amet.</CardText>
      </Card>
      <Card body className="text-center">
        <img src={pranchetaPNG} alt="multitud" width="80px" />
        <CardText>Pymes registradas en Visor. Lorem ipsum dolor sit amet.</CardText>
      </Card>
    </div>
  );
};

export default Tarjetas;