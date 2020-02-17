import pranchetaPNG from '../../assets/img/prancheta.png'
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const InformativeCard = (props) => {
  return (
    <div id="card-dashboard">
      <Card body>
        <img src={pranchetaPNG} alt="multitud" width="80px" height="80px" />
        <CardTitle><h3>2,305</h3></CardTitle>
        <CardText>Pymes registradas en Visor. <br/> Lorem ipsum dolor sit amet.</CardText>
      </Card>
    </div>
  );
};

export default InformativeCard;