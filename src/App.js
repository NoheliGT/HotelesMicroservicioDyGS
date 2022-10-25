import React from 'react';
import './App.css';
import todos from "./hoteles.json";
import imagen from "./imagenes.json";
 /* {useEffect, useState} */
 import Card from 'react-bootstrap/Card';
 import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';
 import InputGroup from "react-bootstrap/InputGroup";
 import FormControl from "react-bootstrap/FormControl";


function App() {
/*   const url = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/hoteles/4/1/10/45866f16-93af-4d29-90e5-c8ec316c0509';
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
  const response = await fetch(url)
  console.log(response.status);

  const responseJson = await response.json()
  setTodos(responseJson)
  console.log(responseJson)
}

useEffect(() =>{
fetchApi()
}, []) */
  return (

    <div>

<div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Hoteleria en Campeche</h2><br />
                <p className='header-text fs-18 fw-3'>¡Este es Campeche, señores, la tierra del pregonero! se levanta con el sol y se oye con los luceros!</p>
           {/*      <InputGroup className="col-1">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-danger" id="button-addon2">
            Search
          </Button>
        </InputGroup> */}
            </div>
            
        </header>
    </div>
    <body>
    <Row xs={1} md={4} className="g-4">
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[0]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[0].Nombre}</Card.Title>
              <Card.Text>
              {todos[0].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[1]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[1].Nombre}</Card.Title>
              <Card.Text>
              {todos[1].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[2]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[2].Nombre}</Card.Title>
              <Card.Text>
              {todos[2].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[3]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[3].Nombre}</Card.Title>
              <Card.Text>
              {todos[3].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[4]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[4].Nombre}</Card.Title>
              <Card.Text>
              {todos[4].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[5]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[5].Nombre}</Card.Title>
              <Card.Text>
              {todos[5].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[6]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[6].Nombre}</Card.Title>
              <Card.Text>
              {todos[6].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[7]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[7].Nombre}</Card.Title>
              <Card.Text>
              {todos[7].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[8]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[8].Nombre}</Card.Title>
              <Card.Text>
              {todos[8].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[9]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[9].Nombre}</Card.Title>
              <Card.Text>
              {todos[9].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[10]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[10].Nombre}</Card.Title>
              <Card.Text>
              {todos[10].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[11]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[11].Nombre}</Card.Title>
              <Card.Text>
              {todos[11].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[12]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[12].Nombre}</Card.Title>
              <Card.Text>
              {todos[12].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[13]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[13].Nombre}</Card.Title>
              <Card.Text>
              {todos[13].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[14]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[14].Nombre}</Card.Title>
              <Card.Text>
              {todos[14].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[15]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[15].Nombre}</Card.Title>
              <Card.Text>
              {todos[15].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[16]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[16].Nombre}</Card.Title>
              <Card.Text>
              {todos[16].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[17]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[17].Nombre}</Card.Title>
              <Card.Text>
              {todos[17].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[18]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[18].Nombre}</Card.Title>
              <Card.Text>
              {todos[18].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[19]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[19].Nombre}</Card.Title>
              <Card.Text>
              {todos[19].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[20]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[20].Nombre}</Card.Title>
              <Card.Text>
              {todos[20].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[21]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[21].Nombre}</Card.Title>
              <Card.Text>
              {todos[21].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[22]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[22].Nombre}</Card.Title>
              <Card.Text>
              {todos[22].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[23]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[23].Nombre}</Card.Title>
              <Card.Text>
              {todos[23].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[24]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[24].Nombre}</Card.Title>
              <Card.Text>
              {todos[24].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[25]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[25].Nombre}</Card.Title>
              <Card.Text>
              {todos[25].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[26]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[26].Nombre}</Card.Title>
              <Card.Text>
              {todos[26].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[27]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[27].Nombre}</Card.Title>
              <Card.Text>
              {todos[27].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[28]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[28].Nombre}</Card.Title>
              <Card.Text>
              {todos[28].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[29]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[29].Nombre}</Card.Title>
              <Card.Text>
              {todos[29].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[30]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[30].Nombre}</Card.Title>
              <Card.Text>
              {todos[30].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        <Col className="mb-0 p-4">
          <Card style={{ width: '18rem' }} border="secondary">
            <Card.Img variant="top" src={imagen.img[31]} style={{ width: '17.9rem', height:'10rem' }}/>
            <Card.Body>
              <Card.Title>{todos[31].Nombre}</Card.Title>
              <Card.Text>
              {todos[31].Ubicacion}
              </Card.Text>
              <Button variant="outline-secondary">+ Información</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Hace 1 día</Card.Footer>
          </Card>
        </Col>
        
    </Row>
      
    </body>
    </div>

    
  );
}

export default App;
