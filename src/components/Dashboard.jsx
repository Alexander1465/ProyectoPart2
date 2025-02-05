import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <AppBar position="static" sx={{backgroundColor: 'burlywood', textAlign: 'right'}}>
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container spacing={1} sx={{ width: '100%' }} >

                        <Grid size={{xs:8, md:2, lg:2}}>        
                            <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Inicio</Link>
                        </Grid>

                        <Grid size={{xs:8, md:2, lg:2}}>        
                            <Link to={'/pierna'} style={{textDecoration:'none', color:'black'}}>Entrenamiento Pierna</Link>
                        </Grid>
 
                        <Grid size={{xs:8, md:2, lg:2}}>        
                            <Link to={'/brazo'} style={{textDecoration:'none', color:'black'}}>Entrenamiento Brazo</Link>
                        </Grid>

                        <Grid size={{xs:8, md:2, lg:2}}>        
                            <Link to={'/pecho'} style={{textDecoration:'none', color:'black'}}>Entrenamiento Pecho</Link>
                        </Grid>

                        <Grid size={{xs:8, md:2, lg:2}}>        
                            <Link to={'/temporizador'} style={{textDecoration:'none', color:'black'}}>Temporizador</Link>
                        </Grid>
                                                
                    </Grid>
                </Toolbar >
            </Container>
        </AppBar>
      
    );
  }
  
  export default Dashboard;