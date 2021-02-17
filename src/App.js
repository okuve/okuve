import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./components/Copyright";
import Intro from "./components/Intro";
import AboutUs from "./components/AboutUs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Intro />
      <AboutUs />
      <Copyright />
    </div>
  );
}

export default App;
