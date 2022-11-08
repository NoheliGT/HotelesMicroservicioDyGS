import React from 'react';
import './App.css';
import todos from "./hoteles.json";
 /* {useEffect, useState} */
 import Card from 'react-bootstrap/Card';
 import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';
 import {useState} from "react";
 import Offcanvas from 'react-bootstrap/Offcanvas';


function App() {
  const [query, setQuery] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div>

<div className='holder'>
        <header className='header'>
        <div className='espacio'>
        <Button className="mb-2" variant="outline-light" onClick={handleShow}>+Información</Button>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Hotelería en Camepeche</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        En proceso...
        </Offcanvas.Body>
      </Offcanvas>           
      </div>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Hoteleria en Campeche</h2><br />
                <p className='header-text fs-18 fw-3'>¡Este es Campeche, señores, la tierra del pregonero! se levanta con el sol y se oye con los luceros!</p>
                <div className="field">
                <input placeholder="¡Escribe un Hotel!" onChange={event => setQuery(event.target.value)}/>
                </div>
            </div>
        </header>
    </div>
    <body>
    <div>
      {
  todos.filter(post => {
    if (query === '') {
      return post;
    } else if (post.Nombre.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
    <div key={index}>
      <Row xs={1} md={3} className="g-4">
      <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={post.img} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{post.Nombre}</Card.Title>
              <Card.Text>
              {post.Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
      </Col>
      </Row>
     
    </div>
  ))
}
    </div>

    <div>

</div>
  
      
    </body>
    </div>

    
  );
}

export default App;
