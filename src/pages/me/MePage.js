import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import meAvatar from "./assets/me.jpeg";
import Avatar from "@material-ui/core/Avatar";
import SocialNetworkSites from "./SocialNetworkSites";
import MeCard from "./MeCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function MePage() {
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
        <Avatar alt="Me" src={meAvatar} className={classes.avatar} />
        <div
          style={{
            color: "white",
            paddingTop: 20,
            fontSize: 24,
          }}
        >
          Muhammet Selçuk Güvel
        </div>
        <SocialNetworkSites />
        <MeCard
          content={
            <div>
              I'm a software engineer at{" "}
              <Link href="https://www.linkedin.com/company/bayzat/">
                Bayzat
              </Link>{" "}
              as full stack by contributing to both mobile and backend.
            </div>
          }
        />
        <MeCard
          content={
            <div>
              I develop projects outside of work, you can find them under
              Projects tab.
              <br /> I love building things.
            </div>
          }
        />
        <MeCard
          content={
            <div>
              I play electric guitar.
              <br />
              My favorite music genres are progressive and heavy metal. I love
              Queensrÿche, Scorpions and Accept.
            </div>
          }
        />
      </Grid>
    </div>
  );
}
