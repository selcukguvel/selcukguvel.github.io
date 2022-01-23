import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "rgb(220, 220, 220)",
    width: 400,
  },
}));

export default function Article(props) {
  const classes = useStyles();

  return (
    <div style={{ paddingTop: 20 }}>
      <Link href={props.url}>
        <Card className={classes.card} variant="outlined">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardContent>
              <Typography variant="h6">{props.name}</Typography>
              <Typography>{props.info}</Typography>
            </CardContent>
          </Grid>
        </Card>{" "}
      </Link>{" "}
    </div>
  );
}
