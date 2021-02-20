import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, ButtonBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
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

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3'>about us</Typography>
          </Grid>

          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt='complex'
                src='/static/images/grid/complex.jpg'
              />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
              earum dolor voluptatum consequatur blanditiis inventore debitis
              fuga numquam voluptate architecto itaque molestiae. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Excepturi neque,
              ipsa animi maiores repellendu distinctioaperiam earum dolor
              voluptatum consequatur blanditiis inventore debitis fuga numquam
              voluptate architecto itaque molestiae. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AboutUs;
