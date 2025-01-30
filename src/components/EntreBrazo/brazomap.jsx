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
      imgsrc: "public/brazo/triceppolea.webp",
      title: "extensión Tríceps con cuerda en polea",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Extensión tríceps con cuerda en polea",
      num: 25
    },
    {
      id: 1,
      imgsrc: "public/brazo/curlbiceps.webp",
      title: "curl bíceps con barra Z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen curl biceps con barra z",
      num: 16
    },
    {
      id: 2,
      imgsrc: "public/brazo/fondosentre.jpg",
      title: "fondos entre bancos",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen fondos entre bancos",
      num: 169
    },
    {
      id: 3,
      imgsrc: "public/brazo/curlbicepsalterno.webp",
      title: "curl martillo alterno",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image curl martillo alterno",
      num: 253
    },
    {
      id: 4,
      imgsrc: "public/brazo/pressfrance.webp",
      title: "press francés inclinado con barra z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen press francés inclinado con barra Z",
      num: 353
    },
    {
      id: 5,
      imgsrc: "public/brazo/barraz.webp",
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