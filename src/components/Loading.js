import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    textAlign: "center"
  }
}));

function Loading(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={100}/>
    </div>
  );
}

export default Loading;
