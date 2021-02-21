import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import logo from "../images/okuve_logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

// color scheme
// main : #5b2434
// secondary : #db9f22
// secondary light :#ce5f1a
const Branding = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container maxWidth='xs' className={classes.container}>
        <img
          alt='Okuve'
          height='194'
          src={logo}
          title='Makes the life of small business easy'
        />
      </Container>
    </section>
  );
};

export default Branding;
