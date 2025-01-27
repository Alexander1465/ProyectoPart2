import 'regenerator-runtime/runtime';
import React from 'react'
//import './App.css';
import Inicio from './components/Inicio'
import Pierna from './components/Pierna';
import Brazo from './components/Brazo';
import Pecho from './components/pecho';
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
