import Dashboard from "./Dashboard"
import { Typography } from "@mui/material"
import BrazoMap from "./EntreBrazo/brazomap"

function Brazo() {
    return <>
        <Dashboard/>
        <Typography>Brazo</Typography>
        <BrazoMap />
    </>
}

export default Brazo