import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        backgroundColor: '#ccff90'
    },
    media: {
        height: 140,
    },
    text: {
        textTransform: 'capitalize'
    }
});

const MainItem = (props) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id + 1}.png`
    const classes = useStyles();
    return (
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
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <NavLink style={{textDecoration:"none"}} to={`/details/${props.id+1}`}>
                    <Button size="small" variant='outlined' color="secondary">
                        See Details!
                    </Button>
                </NavLink>
            </CardActions>
        </Card>
    );
};

export default MainItem;