import React from 'react';
import './App.css';
import todos from "./hoteles.json";
import imagen from "./imagenes.json";
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
        <img className='imagen' src={imagen.img[0]} alt=""/>
        <div className='info'>
        {todos[0].Nombre}{'\n'}{'\n'}
        {todos[0].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imagen.img[1]} alt=""/>
        <div className='info'>
        {todos[1].Nombre}{'\n'}{'\n'}
        {todos[1].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imagen.img[2]} alt=""/>
        <div className='info'>
        {todos[2].Nombre}{'\n'}{'\n'}
        {todos[2].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imagen.img[3]} alt=""/>
        <div className='info'>
        {todos[3].Nombre}{'\n'}{'\n'}
        {todos[3].Ubicacion}
        </div>
        </li>
        <li className='lista'>
        <img className='imagen' src={imagen.img[0]} alt=""/>
        <div className='info'>
        {todos[4].Nombre}{'\n'}{'\n'}
        {todos[4].Ubicacion}
        </div>
        </li>
      </ul>
      </header>
    </div>

    
  );
}

export default App;
