import Dashboard from "./Dashboard"
import { Typography } from "@mui/material"
import PiernaMap from "./EntrePierna/piernamap"
import ComandoVoz from "./voz/ComandoVoz"

function Pierna() {
    return <>
        <Dashboard/>
        <Typography>Pierna</Typography>
        <PiernaMap />
        
    </>


}

export default Pierna