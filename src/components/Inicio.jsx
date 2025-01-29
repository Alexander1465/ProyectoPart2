import Dashboard from "./Dashboard"
import { Typography } from "@mui/material"
import ComandoVoz from "./voz/ComandoVoz"
import CountDown from "./Tiempo/CountDown"
import { useState } from "react"

function Inicio() {
    const [countdownValue, setCountdownValue] = useState(100);
    return <>
        <Dashboard/>
        <Typography variant="h2">Pagina entrenamiento</Typography>
        <ComandoVoz />
        <CountDown seconds={countdownValue} setCountdownValue={setCountdownValue} />
        <ComandoVoz setCountdownValue={setCountdownValue} />
    

</>
}

export default Inicio