import React  from 'react'
import BrazoConf from './brazoconf';
//import '../../App.css';

function BrazoMap() {

  const braz = [
    {
      id: 0,
      imgsrc: "src/assets/sky.jpg",
      title: "Extensión tríceps con cuerda en polea alta",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen del cielo",
      num: 25
    },
    {
      id: 1,
      imgsrc: "src/assets/sea.jpg",
      title: "Curl biceps con barra Z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen del oceano",
      num: 16
    },
    {
      id: 2,
      imgsrc: "src/assets/tux.jpg",
      title: "Fondos entre bancos",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de i love you y un pinguino",
      num: 169
    },
    {
      id: 3,
      imgsrc: "src/assets/mario.jpg",
      title: "Curl martillo alterno",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Image Mario",
      num: 253
    },
    {
      id: 4,
      imgsrc: "src/assets/kirby.jpg",
      title: "Press francés inclinado con barra Z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de Kirby",
      num: 353
    },
    {
      id: 5,
      imgsrc: "src/assets/zelda.jpeg",
      title: "Curl predicador con barra Z",
      noticia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odit illum, odio repellendus explicabo unde mollitia aliquid modi saepe officia totam excepturi cupiditate voluptates et cum inventore quis est tenetur?",
      alt: "Imagen de zelda",
      num: 269
    }
  ];

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', placeItems: 'center', justifyContent: 'center', alignItems: 'center' 
      }}>
    {braz.map((bra) => (
      <BrazoConf key={bra.id} bra={bra} />
    ))}
  </div>
);
      
}

export default BrazoMap