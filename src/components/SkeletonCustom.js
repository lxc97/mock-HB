import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));
function SkeletonCustom(props) {
  const { loading, animation, variant, width } = props;
  const classes = useStyles();

  return (
    <Skeleton
      animation={animation}
      variant={variant}
      width={width}
      height={width}
    />
  );
}

export default SkeletonCustom;
