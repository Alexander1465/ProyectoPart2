import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <AppBar >
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container spacing={1} sx={{ width: '100%' }} >

                        <Grid size={{xs:12, md:2, lg:2}}>        
                            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Inicio</Link>
                        </Grid>

                        <Grid size={{xs:12, md:2, lg:2}}>        
                            <Link to={'/pierna'} style={{textDecoration:'none', color:'white'}}>Entrenamiento Pierna</Link>
                        </Grid>
 
                        <Grid size={{xs:12, md:3, lg:3}}>        
                            <Link to={'/brazo'} style={{textDecoration:'none', color:'white'}}>Entrenamiento Brazo</Link>
                        </Grid>

                        <Grid size={{xs:12, md:3, lg:3}}>        
                            <Link to={'/pecho'} style={{textDecoration:'none', color:'white'}}>Entrenamiento Pecho</Link>
                        </Grid>
                                                
                    </Grid>
                </Toolbar >
            </Container>
        </AppBar>
      
    );
  }
  
  export default Dashboard;