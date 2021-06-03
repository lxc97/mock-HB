import { makeStyles } from "@material-ui/core";
import React from "react";
import AvatarInfo from "./AvatarInfo";

const useStyles = makeStyles((theme) => ({
  h4: {
    color: theme.palette.primary.main,
  },
}));
function Comment(props) {
  const classes = useStyles();
  const { name, created_at, content } = props;
  const check = content?.includes("{");
  const contentJSON = check ? JSON.parse(content) : content;

  return (
    <>
      <AvatarInfo name={name} created_at={created_at} />
      {contentJSON === content ? (
        <>
          <p>{content}</p>
        </>
      ) : (
        <>
          <h4 className={classes.h4}>Update request</h4>
          <p>{contentJSON?.Name}</p>
          <p>{contentJSON?.Content}</p>
          <p>{contentJSON?.Updated}</p>
        </>
      )}
    </>
  );
}

export default Comment;
