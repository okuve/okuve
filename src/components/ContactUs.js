import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <section className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3'>Want to get in touch with us?</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h6' component='h2' gutterBottom>
              Drop an email to{" "}
              <Link href='mailto:info@okuve.com' onClick={preventDefault}>
                info@okuve.com
              </Link>{" "}
              our team will revert to your query.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default ContactUs;
