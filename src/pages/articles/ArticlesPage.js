import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import UnderDevelopment from '../../common/UnderDevelopment'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default function ArticlesPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid
                container
                className={classes.root}
                direction="column"
                justifyContent="center"
                alignItems="center"
                cols={1}
            >
                <div
                    style={{
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        paddingTop: 20,
                        fontSize: 24,
                    }}
                >
                    <UnderDevelopment />
                </div>
                {/* <Article/> */}
            </Grid>
        </div>
    )
}
