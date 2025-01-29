import React  from 'react'
import BrazoConf from './brazoconf';
import { useState } from 'react'
import ComandoVoz from '../voz/ComandoVoz';
//import '../../App.css';

function BrazoMap() {
   const [ejerciciofavorito, setEjercicioFavorito] = useState(null);

  const braz = [
    {
      id: 0,
      imgsrc: "src/assets/sky.jpg",
      title: "extensión Tríceps con cuerda en polea alta",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Extensión tríceps con cuerda en polea alta",
      num: 25
    },
    {
      id: 1,
      imgsrc: "src/assets/sea.jpg",
      title: "curl bíceps con barra Z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen curl biceps con barra z",
      num: 16
    },
    {
      id: 2,
      imgsrc: "src/assets/tux.jpg",
      title: "fondos entre bancos",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen fondos entre bancos",
      num: 169
    },
    {
      id: 3,
      imgsrc: "src/assets/mario.jpg",
      title: "curl martillo alterno",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image curl martillo alterno",
      num: 253
    },
    {
      id: 4,
      imgsrc: "src/assets/kirby.jpg",
      title: "press francés inclinado con barra z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen press francés inclinado con barra Z",
      num: 353
    },
    {
      id: 5,
      imgsrc: "src/assets/zelda.jpeg",
      title: "curl predicador con barra z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de zelda",
      num: 269
    }
  ];

  return (
    <div>
      <ComandoVoz setEjercicioFavorito={setEjercicioFavorito}/>
      <div style={{display: 'flex', flexWrap: 'wrap', placeItems: 'center', justifyContent: 'center', alignItems: 'center' 
        }}>
      {braz.map((bra) => (
        <BrazoConf key={bra.id} bra={bra} setEjercicioFavorito={ejerciciofavorito}/>
      ))}
      </div>
    </div>
);
      
}

export default BrazoMap