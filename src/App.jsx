import 'regenerator-runtime/runtime';
import React from 'react'
//import './App.css';
import Inicio from './components/Inicio'
import Pierna from './components/Pierna';
import Brazo from './components/Brazo';
import Pecho from './components/pecho';
import Temporizador from './components/Temporizador';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <Inicio />
      },
      {
        path: '/brazo',
        element: <Brazo />
      },
      {
        path: '/pierna',
        element: <Pierna />
      },
      {
        path: '/pecho',
        element: <Pecho />
      },
      {
        path: '/temporizador',
        element: <Temporizador />
      }
    ]
  }
])

function App() {
  return (
       
    <RouterProvider router={router} />
  );
}

export default App;
