import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
//import '../App.css';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';



function BrazoConf({ bra, setEjercicioFavorito }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [cont, setCount] = useState(0)


    const handleIconClickD = () => {
        setIsFavorite(prev => !prev);
        setCount(isFavorite ? cont - 1 : cont + 1)
    };

    useEffect(() => {
            if ( setEjercicioFavorito === bra.title) {
                handleIconClickD();
            }
        }, [setEjercicioFavorito]);

    return (
        <Box>
            <Card sx={{ width: 450, margin: "10px"  }}>
                <CardActionArea >
                    <CardActionArea sx={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                        <CardActionArea >
                            <Typography variant="h5">{bra.title}</Typography>
                        </CardActionArea>
                    </CardActionArea>
                    <CardMedia sx={{ height: 194 }}
                        component="img"
                        image={bra.imgsrc}
                        alt={bra.alt}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            {bra.noticia}
                        </Typography>
                    </CardContent>  
                </CardActionArea>
                <CardActionArea sx={{display:"flex", justifyContent:"left", marginLeft:"10px"}}>
                    <IconButton onClick={handleIconClickD}>
                        {isFavorite ? (
                            <FavoriteRoundedIcon   sx={{ color: "red" }}/>
                        ) : (
                            <FavoriteBorderRoundedIcon sx={{ color: "grey" }}/>
                        )}
                    </IconButton>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default BrazoConf;