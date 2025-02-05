import { useState, useEffect, useRef } from "react"

const formatTime = (tiempo) => {
    let minutos = Math.floor(tiempo / 60)
    let segundos = Math.floor(tiempo - minutos * 60)

    if (minutos <= 10) minutos = '0' + minutos;
    if (segundos <= 10) segundos = '0' + segundos;
    return minutos + ':' + segundos
}

export default function CountDown({ segundos, setCountdownValue }) {
    const [countdown, setCountdown] = useState(segundos)
    const timerId = useRef()

    useEffect(() => {
        setCountdown(segundos);
    }, [segundos])  

    useEffect(() => {
        if (countdown <= 0) return;
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current) 
    }, [countdown]) 

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current)
            setCountdownValue(0)  
        }
    }, [countdown])

    return (
        <h2>Temporizador {formatTime(countdown)}</h2>
    )
}
