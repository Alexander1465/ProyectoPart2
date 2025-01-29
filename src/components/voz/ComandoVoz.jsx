import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const ComandoVoz = () => {

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