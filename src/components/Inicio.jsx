import Dashboard from "./Dashboard"
import { Typography } from "@mui/material"
import ComandoVoz from "./voz/ComandoVoz"
import CountDown from "./Tiempo/CountDown"
import { useState } from "react"

function Inicio() {
    const [countdownValue, setCountdownValue] = useState(0);
    return <>
        <Dashboard/>
        <Typography variant="h2">Pagina entrenamiento</Typography>
        {/*<ComandoVoz setEjercicioFavorito={setCountdownValue} setTiempo={setTiempo} />*/}
        <ComandoVoz setTiempo={setCountdownValue} />
        <CountDown seconds={countdownValue} setCountdownValue={setCountdownValue} />
    

</>
}

export default Inicio