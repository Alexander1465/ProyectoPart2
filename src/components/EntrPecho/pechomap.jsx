import React  from 'react'
import PechoConf from './pechoconf';
import { useState } from 'react'
import ComandoVoz from '../voz/ComandoVoz';
//import '../../App.css';

function PechoMap() {
  const [ejerciciofavorito, setEjercicioFavorito] = useState(null);

  const pe = [
    {
      id: 0,
      imgsrc: "src/assets/sky.jpg",
      title: "Titulo 1",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen del cielo",
      num: 25
    },
    {
      id: 1,
      imgsrc: "src/assets/sea.jpg",
      title: "Titulo 2yuvyudiu",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen del oceano",
      num: 16
    },
    {
      id: 2,
      imgsrc: "src/assets/tux.jpg",
      title: "Titulo 3",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de i love you y un pinguino",
      num: 169
    },
    {
      id: 3,
      imgsrc: "src/assets/mario.jpg",
      title: "Titulo 4",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image Mario",
      num: 253
    },
    {
      id: 4,
      imgsrc: "src/assets/kirby.jpg",
      title: "Titulo 5",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de Kirby",
      num: 353
    },
    {
      id: 5,
      imgsrc: "src/assets/zelda.jpeg",
      title: "Titulo 6",
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
      {pe.map((bra) => (
        <PechoConf key={bra.id} bra={bra} setEjercicioFavorito={ejerciciofavorito}/>
      ))}
    </div>
  </div>
);
      
}

export default PechoMap