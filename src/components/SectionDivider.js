import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 100,
  },
}));

const SectionDivider = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default SectionDivider;
