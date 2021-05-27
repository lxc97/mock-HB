import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: "300px",
    width: "400px",
  },
  header: {
    borderBottom: "1px solid #777",
    padding: "15px 25px",
    "& h3": {
      margin: "0",
    },
  },
}));
export default function AlertDialogDetail(props) {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ paper: classes.dialogPaper }}
      >
        <div className={classes.header}>
          <h3>HBLAB</h3>
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOpenEdit} color="primary" autoFocus>
            Edit
          </Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              Name: <span>XXXXXX</span>
            </p>
            <p>
              Assignee: <span>XXXXXXX</span>
            </p>
            <p>
              Status: <span>Disable</span>
            </p>
          </DialogContentText>
        </DialogContent>
        <AlertDialog open={openEdit} setOpen={setOpenEdit} />
      </Dialog>
    </div>
  );
}
