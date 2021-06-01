import { Card, CardActionArea, CardActions, CardContent, CardMedia, createMuiTheme, Grid, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const useStyles = makeStyles({
    root: {
        backgroundColor: '#ccff90'
    },
    media: {
        height: 140,
    },
    text: {
        textTransform: 'capitalize'
    },
    mar:{
        marginTop:'20px'
    }
});
const Details = () => {
    const classes = useStyles();
    const {id} =useParams()
    console.log(id)
    const [name,setName]=useState([])
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
        .then(response => response.json())
        .then(data => setName(data.results))
        
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(response => response.json())
        .then(data => setDetail(data))
        

    },[])
    // console.log(detail)
    console.log(name)
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
    return (
        <Grid container className={classes.mar} justify="center">
            <Grid item xs={8} sm={3} lg={2}>
            <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                        {name[0] && name[0].name}
                    </Typography>
                    <Typography className={classes.text} gutterBottom variant="h6" component="h2">
                        {detail.egg_groups && `Egg group ${detail.egg_groups[0].name} `}
                    </Typography>
                    <Typography className={classes.text} gutterBottom  variantMapping={{h5:'p'}}>
                        {detail.egg_groups && `Flavor text entries ${detail.flavor_text_entries[0].flavor_text}`}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
            </Grid>
        </Grid>
    );
};

export default Details;