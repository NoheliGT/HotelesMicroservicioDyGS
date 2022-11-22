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
 import Accordion from 'react-bootstrap/Accordion';


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

        <div>

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>👤Makie Smith    ⭐ ⭐ ⭐ ⭐ ⭐</Accordion.Header>
        <Accordion.Body>
         "El Hotel esta completamente renovado, buena ubicación e instalaciones limpias. 
          Me encanto. Muchas gracias por esa experiencia!

          El hospedaje Bodega del Hotel Plaza tiene todo lo necesario para una estancia en la Campeche. Con el transporte público
          puedes moverte a dónde quieras e incluso caminar hasta la zona y el palacio.
        
          Lo único por mejorar es tener más personal para atender el desayuno. Durante nuestra estancia con un
          grupo de 8 habitaciones en una estancia de 2 o 3 noches solo había un mesero o a veces dos, pero no era
          suficiente para recojer platos sucios, limpiar y montar mesas y también servir café. Él mismo mesero
          también resurtía el buffet.

          Si eres un cliente delicado a ruidos, puede ser un poco molesto porque los cuartos no están muy bien
          isolados. Pero creo que eso es común en los hoteles de Campeche."
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>👤Florencia Arcos ⭐ ⭐ ⭐ ⭐  ✰ </Accordion.Header>
        <Accordion.Body>
        Estacionamiento Hotel Posada Canaan. “Lindo hotel en infraestructura y habitaciones, mala atención
        en la recepción, muy desorganizados!
        Las habitaciones muy lindas, limpias y calentitas, la cama muy deliciosa,
        el desayuno muy rico y variado, piscina temperada muy rica, pero la
        atención, en la recepción un poco desordenada, tuvimos que esperar
        mucho por la habitación, habiendo llegado mucho después de la hora de
        entrada, tuvimos que dormir 3 personas apretadadas en una sola cama
        por que no había, habitación disponible para nosotros, eso es
        desorganiacion por que la reserva se hizo con 1 mes de
        anticipación!!! y ademas nos habian cicho que el desayuno estaba
        incluido, y luego se negaron!"
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>👤Carlos Moreno ⭐ ⭐ ⭐ ⭐ ⭐  </Accordion.Header>
        <Accordion.Body>
        City Express Campeche.“Limpieza, personal y ubicación excelente. Lo mejor del hotel es la ubicación. 
        Si das dos pasos desde el hotel, llegas a todos los sitios importantes. 
        El personal del hotel es muy amable y siempre tratan de ayudarte todo lo posible.
        Las habitaciones son perfectas, limpias, bien equipadas y sin ningún ruido. Sin duda,
        para las próximas veces que vaya a Salamanca, repetiré de hotel"
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>👤Ariel López    ⭐ ⭐ ⭐ ⭐ ⭐</Accordion.Header>
        <Accordion.Body>
         Estacionamiento del Hotel Puesta del Sol“Excelente opción. Muy buen precio con relación al WEN
          servicio
          Excelente ubicación. Con parking. Se encuentra en la zona antigua,
          por lo que hay que conducir despacio, con cuidado y se ubicará
          fácilmente el parking (teníamos gps). La habitación, grande, cómoda,
          limpia y moderna, el baño mas grande de lo habitual en los hoteles.
          Buen desayuno y buena atención"
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>👤Luciano Garcia  ⭐ ⭐ ⭐ ⭐ ⭐</Accordion.Header>
        <Accordion.Body>
        Hotel CastelMar. "Como está muy cerca de conocidos puntos de referencia, 
        como EL Claustro (0,2 km) y Ciudad Amurallada (2,8 km), 
        los huéspedes de Castelmar Hotel pueden acceder con 
        facilidad a algunas de las atracciones más conocidas de Campeche"
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
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
