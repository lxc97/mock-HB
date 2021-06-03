import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Tag(props) {
  const { icon, name, disabled, isAvatar } = props;
  // const nameArray = name?.split(" ");
  // const index = nameArray?.length - 1;
  // const keyWord = nameArray[index].slice(0, 1);
  const classes = useStyles();

  const handleDelete = () => {
    // console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    // console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      {isAvatar ? (
        <Chip
          size="small"
          // avatar={<Avatar>{keyWord}</Avatar>}
          label={name}
          color="primary"
          // onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
          disabled={disabled}
        />
      ) : (
        <Chip
          size="small"
          label={name}
          color="primary"
          // onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
          disabled={disabled}
        />
      )}
    </div>
  );
}
