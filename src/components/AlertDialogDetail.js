import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core";
import AlertDialog from "./AlertDialog";
import { STATUS_CATEGORY } from "../constants/type";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: "350px",
    width: "400px",
  },
  header: {
    borderBottom: "1px solid #777",
    padding: "15px 25px",
    "& h3": {
      margin: "0",
    },
  },
  action: {
    margin: "0 auto",
  },
  item: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fafafa",
    padding: "0 10px",
    border: "2px solid #fff",
    "& .title": {
      width: "30%"
    }
  }
}));
export default function AlertDialogDetail(props) {
  const classes = useStyles();
  const { openDetail, setOpenDetail, dataEdit } = props;
  console.log({ dataEdit });

  const handleClose = () => {
    setOpenDetail(false);
  };

  return (
    <div>
      <Dialog
        open={openDetail}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ paper: classes.dialogPaper }}
      >
        <div className={classes.header}>
          <h3>HBLAB</h3>
        </div>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            {/* <table className={classes.table}>
                <tr>
                  <th>Name:</th>
                  <td>{dataEdit?.name}</td>
                </tr>
                <tr>
                  <th>Assignee:</th>
                  <td>{dataEdit?.assignee}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{STATUS_CATEGORY[dataEdit?.status]}</td>
                </tr>
            </table> */}

            <div className={classes.item}>
              <h4 className="title">Name:</h4>
              <p>{dataEdit?.name}</p>
            </div>
            <div className={classes.item}>
              <h4 className="title">Assignee:</h4>
              <p>{dataEdit?.assignee}</p>
            </div>
            <div className={classes.item}>
              <h4 className="title">Status:</h4>
              <p>{STATUS_CATEGORY[dataEdit?.status]}</p>
            </div>

          </DialogContentText>
        </DialogContent>

        <DialogActions className={classes.action}>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
