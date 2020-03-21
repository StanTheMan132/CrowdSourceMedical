import React from 'react';
import {HeaderComponent} from '../components/header';
import {Grid} from '@material-ui/core'

export const IndexPage = props => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <HeaderComponent/>
            </Grid>
        </Grid>
    );
}