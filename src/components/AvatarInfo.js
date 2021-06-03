import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import imageAvatar from "../assets/image/user.png";
import imageAvatar2 from "../assets/image/penguin.png";
import imageAvatar3 from "../assets/image/sloth.png";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    marginLeft: "20px",
  },
  userName: {
    fontSize: "16px",
    fontWeight: "600",
    paddingBottom: "8px",
  },
  date: {
    color: "#777",
    fontSize: "12px",
  },
}));

function AvatarInfo(props) {
  const { name, created_at, loading } = props;
  const classes = useStyles();
  return (
    <div className={classes.avatar}>
      {loading ? (
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
      ) : (
        <Avatar alt="Remy Sharp" src={imageAvatar3} />
      )}
      <div className={classes.info}>
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              height={10}
              width={200}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width={100} />
          </>
        ) : (
          <>
            <div className={classes.userName}>{name}</div>
            <div className={classes.date}>Created: {created_at} </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AvatarInfo;
