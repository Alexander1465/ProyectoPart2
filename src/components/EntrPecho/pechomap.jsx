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
      imgsrc: "public/pecho/pressbanca.png",
      title: "press de banca",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Press de banca",
      num: 25
    },
    {
      id: 1,
      imgsrc: "public/pecho/aperturamancuerna.png",
      title: "aperturas como mancuernas",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Aperturas con mancuernas",
      num: 16
    },
    {
      id: 2,
      imgsrc: "public/pecho/pressbancainclinado.png",
      title: "press de banca inclinado",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Press de banca inclinado",
      num: 169
    },
    {
      id: 3,
      imgsrc: "public/pecho/flexiones.png",
      title: "flexiones",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image Flexiones",
      num: 253
    },
    {
      id: 4,
      imgsrc: "public/pecho/pressfloor.jpg",
      title: "Press flor",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Press floor",
      num: 353
    },
    {
      id: 5,
      imgsrc: "public/pecho/mancuerna.png",
      title: "press de banca con mancuernas",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen Press de banca con mancuernas",
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