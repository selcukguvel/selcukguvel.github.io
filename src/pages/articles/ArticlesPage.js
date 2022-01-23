import { makeStyles } from "@material-ui/core/styles";
import Article from "./Article.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ArticlesPage() {
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
        <Article
          name="How did we get rid of messy utils file?"
          info="This is the story of how we got rid of the messy utils file we had in our mobile codebase at Bayzat."
          url="https://medium.com/@selcukguvel/how-did-we-get-rid-of-messy-utils-file-70dc508003f8"
          imageStyle={{ height: 0, paddingTop: "52.25%" }}
        />
      </Grid>
    </div>
  );
}
