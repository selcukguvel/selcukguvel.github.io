import { makeStyles } from "@material-ui/core/styles";
import Project from "./Project.js";
import viewAsJsonProjectImage from "./assets/view-as-json.png";
import visualGraphIsomorphismProjectImage from "./assets/visual-graph-isomorphism.png";
import gexfToCsvProjectImage from "./assets/gexf-to-csv.png";
import personalWebSiteProjectImage from "./assets/personal-website.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProjectsPage() {
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
        <Project
          name="View as JSON"
          info="JSON viewer plugin for IntelliJ-based IDEs"
          url="https://github.com/selcukguvel/view-as-json"
          image={viewAsJsonProjectImage}
          imageStyle={{ height: 0, paddingTop: "40.25%" }}
        />
        <Project
          name="Visual Graph Isomorphism"
          info="Graph isomorphism visualizer"
          url="https://github.com/selcukguvel/visual-graph-isomorphism"
          image={visualGraphIsomorphismProjectImage}
          imageStyle={{ height: 0, paddingTop: "34.25%" }}
        />
        <Project
          name="GEXF to CSV"
          info="Converts GEXF to CSV"
          url="https://github.com/selcukguvel/gexf-to-csv"
          image={gexfToCsvProjectImage}
          imageStyle={{ height: 0, paddingTop: "52.25%" }}
        />
        <Project
          name="selcukguvel.github.io"
          info="Personal website"
          url="https://github.com/selcukguvel/selcukguvel.github.io"
          image={personalWebSiteProjectImage}
          imageStyle={{ height: 0, paddingTop: "52.25%" }}
        />
      </Grid>
    </div>
  );
}
