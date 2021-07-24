import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuItem from './MenuItem.js'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 40,
    },
}))

export default function Menu(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MenuItem
                name="Me"
                changePage={props.changePage}
                currentPage={props.currentPage}
            />
            <MenuItem
                name="Projects"
                changePage={props.changePage}
                currentPage={props.currentPage}
            />
            <MenuItem
                name="Articles"
                changePage={props.changePage}
                currentPage={props.currentPage}
            />
            <MenuItem
                name="Music"
                changePage={props.changePage}
                currentPage={props.currentPage}
            />
        </div>
    )
}
