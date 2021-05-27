import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

function Notification(props) {
  const { notify, setNotify } = props;
  console.log(notify)

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={1000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={notify.type} >
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
