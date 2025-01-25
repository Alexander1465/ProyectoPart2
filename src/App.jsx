import 'regenerator-runtime/runtime';
import React from 'react'
//import './App.css';
import Inicio from './components/Inicio'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <Inicio />
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
