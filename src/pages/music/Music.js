import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'rgb(220, 220, 220)',
        width: 400,
    },
}))

export default function Music(props) {
    const classes = useStyles()

    const handleMusicClick = () => {
        window.open(props.url)
    }

    return (
        <div style={{ paddingTop: 20 }}>
            <Card className={classes.card} variant="outlined">
                <CardMedia
                    style={props.imageStyle}
                    image={props.image}
                    title={props.name}
                />
                <CardContent>
                    <Typography variant="h6">{props.name}</Typography>
                    <Typography>
                        {props.isComposition ? 'Composition' : 'Cover'}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        onClick={handleMusicClick}
                        aria-label="Open song"
                    >
                        <LibraryMusicIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}
