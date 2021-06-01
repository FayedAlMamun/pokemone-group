import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState,useContext } from 'react';
import { userContext } from '../../App';
import MainItem from '../MainItem/MainItem';
const useStyles = makeStyles({
    root: {
        marginTop: '10px',
        paddingLeft:'8px'
    },
});
const Main = () => {
    const [search,setSearch]=useContext(userContext);
    const [data, setData] = useState([])
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
            .then(response => response.json())
            .then(data => setData(data.results))
    }, [])
   const date=data.filter(e=>e.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    const classes = useStyles();
    return (
        <Grid  className={classes.root} container>
            <Grid item container xs={false} sm={1}/>
            <Grid item container xs={12} sm={10} spacing={5} justify='center'>
            {
                date.map((name, id) => {
                    return [
                            <Grid item xs={12} sm={5} md={3} lg={2}>
                                <MainItem
                                    key={id}
                                    id={id}
                                    name={name.name} />
                            </Grid>

                    ]
                })
            }
            </Grid>
            <Grid item container xs={false} sm={1}/>
        </Grid>

    );
};

export default Main;