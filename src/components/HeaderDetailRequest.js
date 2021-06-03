import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { STATUS } from "../constants/type";
import AlertDialogRequest from '../pages/DetailRequest/AlertDialogRequest'

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  status: {
    padding: "5px 20px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "40px",
    textAlign: "center",
    marginBottom: "10px",
    color: "#fff",
  },
}));

function HeaderDetailRequest(props) {
  const { status_admin, content, loading, dataFix } = props;
  console.log({dataFix})
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleChangePage = (data) => {
    setOpen(true);
  };
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        {loading ? (
          <Skeleton animation="wave" height={40} width={200} />
        ) : (
          <h1>{content}</h1>
        )}
      </div>
      <div className={classes.action}>
        <div className={classes.status}>{STATUS[status_admin]}</div>
        <div className={classes.actionType}>
          <Button
            variant="contained"
            color="default"
            onClick={() => handleChangePage(dataFix)}
          >
            Edit
          </Button>
        </div>
      </div>
      <AlertDialogRequest dataFix={dataFix} open={open} setOpen={setOpen}/>
    </div>
  );
}

export default HeaderDetailRequest;
