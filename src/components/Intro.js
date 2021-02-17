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
    marginTop: 300,
    marginBottom: 200,
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h4' component='h1' gutterBottom>
          Hi, my name is Your Name I'm the Unknown Developer.
        </Typography>
      </Paper>
    </div>
  );
};

export default Intro;
