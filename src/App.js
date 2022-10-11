import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const url = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/hoteles/4/1/5/45866f16-93af-4d29-90e5-c8ec316c0509';
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
}, [])

  return (
    <div className="App">
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
    <a className="navbar-brand text-uppercase" href='/'>Turismo en campeche: Hoteleria</a>
    </div>
    </nav>
      <header className="App-header">
        <p>
        Hotel:  {todos[0].Nombre} <br></br> Ubicación: {todos[0].Ubicacion}
        <br></br> Domicilio: {todos[0].Calle}, Colonia: {todos[0].Colonia} <br></br>Correo de contacto: {todos[0].Correo_e} 
        <br></br>Página oficial: {todos[0].Sitio_internet}
        </p>
      </header>
    </div>
  );
}

export default App;
