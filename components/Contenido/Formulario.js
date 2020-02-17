import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Formulario = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Proveedor"
        />
      </FormGroup>
    </Form>
  );
}
    
    export default Formulario;