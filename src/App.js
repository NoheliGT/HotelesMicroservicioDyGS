import React from 'react';
import './App.css';
import todos from "./hoteles.json";
 /* {useEffect, useState} */

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
const imgcero = "https://telegra.ph/file/fb1bc5d6d26b3897cda28.jpg";
const imguno = "https://telegra.ph/file/16370a7fa38ebf39cbc0b.jpg";
  return (

    <div className="App">
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
    <a className="navbar-brand text-uppercase" href='/'>Hoteleria: CAMPECHE</a>
    </div>
    </nav>
      <header className='App-header'>
      <ul className='padrelista'>
        <li className='lista'>
        <img className='imagen' src={imgcero} alt=""/>
        <div className='info'>
        {todos[0].Nombre}
        {todos[0].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imguno} alt=""/>
        <div className='info'>
        {todos[1].Nombre}
        {todos[1].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imguno} alt=""/>
        <div className='info'>
        {todos[5].Nombre}
        {todos[5].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imguno} alt=""/>
        <div className='info'>
        {todos[3].Nombre}
        {todos[3].Ubicacion}
        </div>
        </li>
      </ul>
      </header>
    </div>

    
  );
}

export default App;
