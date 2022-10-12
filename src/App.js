import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const url = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/hoteles/4/1/10/45866f16-93af-4d29-90e5-c8ec316c0509';
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
const imgcero = "https://telegra.ph/file/fb1bc5d6d26b3897cda28.jpg";
const imguno = "https://telegra.ph/file/16370a7fa38ebf39cbc0b.jpg";
  return (

    <div className="App">
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
    <a className="navbar-brand text-uppercase" href='/'>Turismo en campeche: Hoteleria</a>
    </div>
    </nav>
      <header className="App-header">
      <div>
      <ul className='padrelista'>
        <li className='lista'>
        <img className='imagen' src={imgcero} alt=""/>
        <div>
        {todos[0].Nombre}
        {todos[0].Ubicacion}
        {todos[0].Correo_e}
        {todos[0].Sitio_internet}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imguno} alt=""/>
        <div>
        {todos[1].Nombre}
        {todos[1].Ubicacion}
        {todos[1].Correo_e}
        {todos[1].Sitio_internet}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imguno} alt=""/>
        <div>
        {todos[2].Nombre}
        {todos[2].Ubicacion}
        {todos[2].Correo_e}
        {todos[2].Sitio_internet}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imguno} alt=""/>
        <div>
        {todos[3].Nombre}
        {todos[3].Ubicacion}
        {todos[3].Correo_e}
        {todos[3].Sitio_internet}
        </div>
        </li>
      </ul>
      </div>
  {/*     <p>
        Hotel:  {todos[0].Nombre} <br></br> Ubicación: {todos[0].Ubicacion}
        <br></br> Domicilio: {todos[0].Calle}, Colonia: {todos[0].Colonia} <br></br>Correo de contacto: {todos[0].Correo_e} 
        <br></br>Página oficial: {todos[0].Sitio_internet}
        </p> */}
      </header>
    </div>
  );
}

export default App;
