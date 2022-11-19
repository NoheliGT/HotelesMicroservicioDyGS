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
 import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MapComponent } from "./components/MapComponent.js";


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
        <Offcanvas.Title>Hoteles más reservados en Campeche</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        Aquí están los hoteles más elegidos por nuestros usuarios en Campeche. Encuentra la opción más adecuada para tu viaje.</Offcanvas.Body>
      </Offcanvas>           
      </div>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'> HOTELERIA EN CAMPECHE</h2><br />
                <p className='header-text fs-18 fw-3'>¡Este es Campeche, señores, la tierra del pregonero! se levanta con el sol y se oye con los luceros!</p>
                <div className="field">
                <input placeholder="¡Escribe un Hotel!" onChange={event => setQuery(event.target.value)}/>
                </div>
            </div>
        </header>
    </div>
    <body>
    <div className="inicial">
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
      variant='pills'
    >
      <Tab eventKey="home" title="B ú s q u e d a">

    <div >
      <Row lg={4}>
      {
  todos.filter(post => {
    if (query === '') {
      return post;
    } else if (post.Nombre.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
    <Col className="d-flex">
    <Card className="flex-fill mb-2" style={{ width: '13rem', height:'23rem' }}>
    <Card.Img variant="top" src={post.img} className='img-fluid shadow-4' style={{height:'10rem' }}/>
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem"}}>{post.Nombre}</Card.Title>
        <Card.Text style={{ fontSize: "0.8rem"}}> 
        🌎Ubicación: {post.Ubicacion}
        </Card.Text>
        <Card.Text style={{ fontSize: "0.8rem"}}> 
        {post.Colonia}, {post.Calle}
        </Card.Text>
        <a href={post.mapa} target="_blank" rel="noreferrer">
          <Button className="btn btn-primary" variant="primary" size="sm">Ir ✈</Button>
        </a>
      </Card.Body>
    </Card>
  </Col>
    ))
  }
       
      </Row>
     
    </div>

      </Tab>
      <Tab eventKey="longer-tab" title="R e s e ñ a s">
      </Tab>
    </Tabs>
 
    </div>

    <div>

</div>
  
      
    </body>
    </div>

    
  );
}

export default App;
