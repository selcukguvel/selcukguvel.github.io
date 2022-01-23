import { makeStyles } from "@material-ui/core/styles";
import Music from "./Music.js";
import loopMusicImage from "./assets/loop.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MusicPage() {
  const classes = useStyles();

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
        <Music
          name="Loop"
          isComposition={true}
          url="https://soundcloud.com/selcukguvel/loop"
          image={loopMusicImage}
          imageStyle={{ height: 0, paddingTop: "56.25%" }}
        />
      </Grid>
    </div>
  );
}
