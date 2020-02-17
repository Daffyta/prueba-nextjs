import React from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Tabla = (props) => {
  return (
    <div>
      <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Emisión-Venc.</th>
            <th>Proveedor</th>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Descargas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad Integra Cartomex S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad Integra Cartomex S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad Integra Cartomex S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad de Abogados S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad de Abogados S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad de Abogados S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad de Abogados S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>JUN 19 - JUL 18</td>
            <td>Sociedad de Abogados S.A. de C.V.</td>
            <td>Gastos general</td>
            <td>$ 4444,4444,4444.00 MXN</td>
            <td>Descarga</td>
          </tr>
        </tbody>  
      </Table>
      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            7
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            9
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default Tabla;