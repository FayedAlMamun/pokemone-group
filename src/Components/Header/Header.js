import { AppBar, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import BasicTextFields from './BasicTextFields';

const Header = () => {
    return (
            <AppBar position="static" >
                <Toolbar>
                    <Grid container direction='column'>
                        <Grid item xs='12'>
                            <BasicTextFields />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
    );
};

export default Header;