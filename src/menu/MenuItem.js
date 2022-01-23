import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    padding: theme.spacing(4),
    color: "white",
    fontSize: 30,
    cursor: "pointer",
  },
  selectedMenuItem: {
    padding: theme.spacing(4),
    color: "#845c69",
    fontSize: 30,
    cursor: "pointer",
  },
}));

export default function MenuItem(props) {
  const classes = useStyles();

  const isSelected = props.currentPage === props.name;

  return (
    <Link
      id={props.name}
      onClick={props.changePage}
      className={isSelected ? classes.selectedMenuItem : classes.menuItem}
    >
      {props.name}
    </Link>
  );
}
