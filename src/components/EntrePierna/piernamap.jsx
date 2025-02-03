import React  from 'react'
import PiernaConf from './piernaconf';
import { useState } from 'react'
import ComandoVoz from '../voz/ComandoVoz';
//import '../../App.css';

function PiernaMap() {
  const [ejerciciofavorito, setEjercicioFavorito] = useState(null);

  const pie = [
    {
      id: 0,
      imgsrc: "public/pierna/sentadilla.webp",
      title: "sentadilla con barra",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de sentadilla con barra",
      num: 25
    },
    {
      id: 1,
      imgsrc: "public/pierna/gemelos.webp",
      title: "elevación de gemelos",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de elevación de gemelos",
      num: 16
    },
    {
      id: 2,
      imgsrc: "public/pierna/curlfemoral.jpg",
      title: "curl femoral sentado",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de curl femoral sentado",
      num: 169
    },
    {
      id: 3,
      imgsrc: "public/pierna/sentadillafrontal.jpg",
      title: "sentadilla frontal con barra",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image sentadilla frontal con barra",
      num: 253
    },
    {
      id: 4,
      imgsrc: "public/pierna/pesomuerto.webp",
      title: "peso muerto",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen peso muerto",
      num: 353
    },
    {
      id: 5,
      imgsrc: "public/pierna/sentadillabulgara.jpg",
      title: "sentadilla búlgara",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen sentadilla búlgara",
      num: 269
    }
  ];

  return (
    <div>
      <ComandoVoz setEjercicioFavorito={setEjercicioFavorito}/>
      <div style={{display: 'flex', flexWrap: 'wrap', placeItems: 'center', justifyContent: 'center', alignItems: 'center' 
        }}>
      {pie.map((bra) => (
        <PiernaConf key={bra.id} bra={bra} setEjercicioFavorito={ejerciciofavorito} />
      ))}
    </div>
  </div>
);
      
}

export default PiernaMap