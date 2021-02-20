import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  paperChild: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const OurServices = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3'>We can help you with</Typography>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paperChild}>
              Help to reduce operation cost
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperChild}>Increase productivity</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperChild}>
              Leverage digital products
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperChild}>
              Custom solution tailoring
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperChild}>
              Keep the cost affordable
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperChild}>Reduce manual overhead</Paper>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default OurServices;
