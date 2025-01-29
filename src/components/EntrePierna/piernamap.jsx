import React  from 'react'
import PiernaConf from './piernaconf';
//import '../../App.css';

function PiernaMap() {

  const pie = [
    {
      id: 0,
      imgsrc: "src/assets/sky.jpg",
      title: "Sentadilla con barra",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de sentadilla con barra",
      num: 25
    },
    {
      id: 1,
      imgsrc: "src/assets/sea.jpg",
      title: "Elevación de gemelos",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de elevación de gemelos",
      num: 16
    },
    {
      id: 2,
      imgsrc: "src/assets/tux.jpg",
      title: "Curl femoral sentado",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de curl femoral sentado",
      num: 169
    },
    {
      id: 3,
      imgsrc: "src/assets/mario.jpg",
      title: "Sentadilla frontal con barra",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image sentadilla frontal con barra",
      num: 253
    },
    {
      id: 4,
      imgsrc: "src/assets/kirby.jpg",
      title: "Peso muerto",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen peso muerto",
      num: 353
    },
    {
      id: 5,
      imgsrc: "src/assets/zelda.jpeg",
      title: "Sentadilla búlgara",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen sentadilla búlgara",
      num: 269
    }
  ];

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', placeItems: 'center', justifyContent: 'center', alignItems: 'center' 
      }}>
    {pie.map((bra) => (
      <PiernaConf key={bra.id} bra={bra} />
    ))}
  </div>
);
      
}

export default PiernaMap