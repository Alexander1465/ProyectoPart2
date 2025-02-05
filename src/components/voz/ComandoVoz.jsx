import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const ComandoVoz = ({setEjercicioFavorito, setCountdown}) => {

  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'abrir página *',
      callback: (page) => { if (page === 'pecho') {
          window.location.href = '/pecho';
        }else if (page === 'brazo') {
          window.location.href = '/brazo';
        }else if (page === 'pierna') {
          window.location.href = '/pierna';
        }else if (page === 'temporizador') {
          window.location.href = '/temporizador';
        }else if (page === 'Inicio') {
          window.location.href = '/inicio';
        }else {
          setMessage('No existe la pagina');
        }
      }
    },
    {
      command:'me gusta el ejercicio de pierna *',
      callback: (nombreejercicio) => {
        if(nombreejercicio === "sentadilla con barra"){
          setEjercicioFavorito(nombreejercicio);
        } else if(nombreejercicio === "elevación de gemelos"){
          setEjercicioFavorito(nombreejercicio);
        }else if(nombreejercicio === "curl femoral sentado"){
          setEjercicioFavorito(nombreejercicio);
        }else if(nombreejercicio === "sentadilla frontal con barra"){
          setEjercicioFavorito(nombreejercicio);
        } else if(nombreejercicio === "peso muerto"){
          setEjercicioFavorito(nombreejercicio);
        } else if(nombreejercicio === "sentadilla búlgara"){
          setEjercicioFavorito(nombreejercicio);
        } else if(nombreejercicio === "sentadilla con barra"){
          setEjercicioFavorito(nombreejercicio);
        } else {
          setMessage("No existe ese ejercicio de pierna")
        }
      }
    },
    {
      command:'me gusta el ejercicio de brazo *',
      callback: (ejerciciobrazo) => {
        if(ejerciciobrazo === "extensión Tríceps con cuerda polea"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "curl bíceps con barra Z"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "fondos entre banco"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "curl martillo alterno"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "press francés inclinado con barra Z"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "curl predicador con barra Z"){
          setEjercicioFavorito(ejerciciobrazo);
          
        } else {
          setMessage("No existe ese ejercicio de brazo")
        }
      }
    },
    {
      command:'me gusta el ejercicio de pecho *',
      callback: (ejerciciobrazo) => {
        if(ejerciciobrazo === "press de banca"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "aperturas como mancuernas"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "press de banca inclinado"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "flexiones"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "Press flor"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "press de banca con mancuernas"){
          setEjercicioFavorito(ejerciciobrazo);
        } else {
          setMessage("No existe ese ejercicio de pecho")
        }
      }
    },
    {
      command: "temporizador de *",
      callback: (num) => {
        setCountdown(num);  
      },
    }
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

   
  
  console.log(message)
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <button style={{padding: '20px', paddingLeft: '40px', paddingRight: '40px'}} onClick={SpeechRecognition.startListening}>Start</button>
      <button style={{padding: '20px', paddingLeft: '40px', paddingRight: '40px'}} onClick={SpeechRecognition.stopListening}>Stop</button>
      <p>{transcript}</p>
      <p>{message}</p>
      
     
    </div>
  )
}
export default ComandoVoz