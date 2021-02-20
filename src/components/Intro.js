import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    marginTop: 190,
  },
  brandTitle: {
    //  emerald #028A0F
    //  Sage #728C69
    //  Basil #32612D
    //  Seafoam #3DEF97

    color: "#728C69",
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
