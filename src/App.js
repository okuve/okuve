import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./components/Copyright";
import Intro from "./components/Intro";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import SectionDivider from "./components/SectionDivider";

const useStyles = makeStyles(() => ({
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
      <SectionDivider />
      <OurServices />
      <SectionDivider />
      <ContactUs />
      <SectionDivider />
      <Copyright />
    </div>
  );
}

export default App;
