import Dashboard from "./Dashboard"
import { Typography } from "@mui/material"
import ComandoVoz from "./voz/ComandoVoz"

function Inicio() {
    
    return (
        <>
            <Dashboard/>
            <Typography variant="h2">Pagina entrenamiento</Typography>
            <ComandoVoz />
        </>
    );
}

export default Inicio;