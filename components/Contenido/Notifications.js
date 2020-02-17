import React, { Component } from'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

import Child from './ItemList.js'

class Notificaciones extends React.Component{
  constructor(props){
     super(props);
     this.state = { 
        items: [
          {id:1,text:"Lorem ipsum dolor amet, consectetur adipiscing elit."},
          {id:2,text:"Nullam rutrum felis ut metus tempus porttitor."},
          {id:3,text:"Etiam ipsum risus, faucibus ut iaculis eget, pretium risus."},
          {id:4,text:"Duis arcurisus vehicula consectetur ac non enim."},
          {id:5,text:"Duis non convallis odio. Quisque maximus eu lorem eu laoreet."},
          {id:6,text:"Lorem ipsum dolor amet, consectetur adipiscing elit."},
          {id:7,text:"Nullam rutrum felis ut metus tempus porttitor."},
          {id:8,text:"Etiam ipsum risus, faucibus ut iaculis eget, pretium risus."},
          {id:9,text:"Duis arcurisus vehicula consectetur ac non enim."},
        ], 
      }
      this.removeTodo = this.removeTodo.bind(this);
  }
  
  removeTodo(id) {
    const remainder = this.state.items.filter(item => item.id !== id);
    this.setState({items: remainder});
  }
  
  render(){
     return(
      <div id="notificaciones">
        <Card>
         <CardHeader>
            <h5>Notificaciones</h5>
         </CardHeader>
         <CardBody>
          <CardTitle>
            <Child items={this.state.items} remove={this.removeTodo} />
          </CardTitle>
         </CardBody>
        </Card>
     </div>
     );
  }
}

export default Notificaciones;



