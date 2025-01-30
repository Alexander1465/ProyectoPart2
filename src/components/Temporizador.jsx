import Dashboard from "./Dashboard"
import ComandoVoz from "./voz/ComandoVoz"
import CountDown from "./Tiempo/CountDown"
import { useState } from "react"

function Temporizador() {
    const [countdownValue, setCountdownValue] = useState(0);
    return <>
        <Dashboard/>
        <ComandoVoz setCountdown={setCountdownValue} />
        <CountDown seconds={countdownValue} setCountdownValue={setCountdownValue} />
    </>


}

export default Temporizador