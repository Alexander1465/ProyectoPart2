import { useState, useEffect, useRef } from "react"

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds <= 10) seconds = '0' + seconds;
    return minutes + ':' + seconds
}

export default function CountDown({ seconds, setCountdownValue }) {
    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(() => {
        setCountdown(seconds);
    }, [seconds])  

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
