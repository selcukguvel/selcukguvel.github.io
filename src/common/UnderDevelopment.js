import React from 'react'
import HourglassFullIcon from '@material-ui/icons/HourglassFull'
import Grid from '@material-ui/core/Grid'

export default function UnderDevelopment(props) {
    return (
        <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="center">
                <div style={{ paddingRight: 8 }}>Under development</div>
                <HourglassFullIcon />
            </Grid>
        </Grid>
    )
}
