import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const ComandoVoz = ({setEjercicioFavorito, setTiempo}) => {

  

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
        }else {
          setMessage('No existe la pagina pecho');
        }
      }
    },
    {
      command:'me gusta  *',
      callback: (nombreejercicio) => {
        if(nombreejercicio === "sentadillas con barra"){
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
          setMessage("----------------------------------------------")
        } else {
          setMessage('No existe ese nombre');
        }
      }
    },
    {
      command:'me gusta el ejercicio de brazo *',
      callback: (ejerciciobrazo) => {
        if(ejerciciobrazo === "extensión Tríceps con cuerda en polea alta"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "curl bíceps con barra Z"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "fondos entre bancos"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "curl martillo alterno"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "press frances inclinado con barra z"){
          setEjercicioFavorito(ejerciciobrazo);
        } else if(ejerciciobrazo === "curl predicador con barra z"){
          setEjercicioFavorito(ejerciciobrazo);
          setMessage("----------------------------------------------")
        } else {
        }
      }
    },
    {
      command: "reloj de *",
      callback: (num) => {
        setTiempo(num);
      },
    },
    {
      command: 'borrar',
      callback: ({ resetTranscript }) => resetTranscript()
    }
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

   
  
  console.log(message)
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <p>{transcript}</p>
      <p>{message}</p>
      
     
    </div>
  )
}
export default ComandoVoz