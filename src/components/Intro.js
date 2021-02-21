import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    marginTop: 10,
  },
  brandTitle: {
    color: "#5b2434",
    fontFamily: "Sail, cursive",
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h4' component='h1' gutterBottom>
          Hi, welcome to <b className={classes.brandTitle}>Okuve</b>.
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          We make the life of small business easy.
        </Typography>
      </Paper>
    </section>
  );
};

export default Intro;
