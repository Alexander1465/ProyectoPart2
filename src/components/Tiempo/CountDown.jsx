import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds <= 10) seconds = '0' + seconds;
    return minutes +':'+seconds
}

export default function CountDown({seconds, setCountdownValue}) {
    const [ countdown, setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() =>{
            setCountdown(prev => prev -1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [])


    useEffect(() => {
        if (countdown <= 0) {
          clearInterval(timerId.current);
        }
      }, [countdown]);

    useEffect(() => {
        if (setCountdownValue !== undefined) {
          setCountdown(setCountdownValue);
        }
      }, [setCountdownValue]);

    return (
        <h2>Count Down: {formatTime(countdown)}</h2>
    )
}