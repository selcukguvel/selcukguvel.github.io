import { makeStyles } from "@material-ui/core/styles";
import Menu from "./menu/Menu.js";
import Grid from "@material-ui/core/Grid";
import MePage from "./pages/me/MePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ArticlesPage from "./pages/articles/ArticlesPage";
import MusicPage from "./pages/music/MusicPage";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 20,
  },
}));

export default function App() {
  const classes = useStyles();

  const [page, setPage] = useState("Me");

  const handlePageChange = (event) => {
    setPage(event.target.id);
  };

  const getCurrentPageComponent = () => {
    if (page === "Me") {
      return <MePage />;
    } else if (page === "Projects") {
      return <ProjectsPage />;
    } else if (page === "Articles") {
      return <ArticlesPage />;
    } else if (page === "Music") {
      return <MusicPage />;
    }
  };

  return (
    <div>
      <Grid
        container
        className={classes.root}
        direction="column"
        justifyContent="center"
        alignItems="center"
        cols={1}
      >
        <Menu changePage={handlePageChange} currentPage={page} />
        {getCurrentPageComponent()}
      </Grid>
    </div>
  );
}
