import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core";
import InputField from "./InputField";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import SelectField from "./SelectField";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, updateCategory } from "../redux/actions/category";
import { assignee } from "../redux/actions/assignee";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: "460px",
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
    marginTop: "50px",
  },
}));

export default function AlertDialog(props) {
  const classes = useStyles();
  const { open, setOpen, dataEdit } = props;
  console.log({ dataEdit });
  const dispatch = useDispatch();

  const assignees = useSelector((state) => state.assigneeReducer).data;
  const handleClose = () => {
    setOpen(false);
  };
  const initialValue = {
    name: dataEdit ? dataEdit.name : "",
    user_id: dataEdit ? dataEdit.assignee_id : null,
    status: dataEdit ? dataEdit.status : null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("This name field is required!")
      .max(30, "must be less than 10 words"),
    user_id: Yup.number()
      .required("This assignee field is required!")
      .nullable(),
    status: Yup.number().required("This status field is required!").nullable(),
  });

  const handleSubmit = (values) => {
    if (!dataEdit) {
      dispatch(postCategory(values));
    } else {
      const data = {
        ...values,
        id: dataEdit.id,
      };
      dispatch(updateCategory(data));
    }
    handleClose();
  };
  const status = [
    { id: 1, name: "Anable" },
    { id: 2, name: "Disable" },
  ];

  useEffect(() => {
    dispatch(assignee());
  }, []);

  return (
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

      <DialogContent>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {(formikProps) => {
            return (
              <Form className={classes.form}>
                <div className={classes.item}>
                  <h3>Name</h3>
                  <FastField
                    name="name"
                    component={InputField}
                    variant="outlined"
                    margin="normal"
                    id="name"
                    className="input"
                  />
                </div>

                <div className={classes.item}>
                  <h3>Assignee</h3>
                  <FastField
                    name="user_id"
                    component={SelectField}
                    id="user_id"
                    options={assignees}
                    className="input"
                  />
                </div>

                <div className={classes.item}>
                  <h3>Status</h3>
                  <FastField
                    name="status"
                    component={SelectField}
                    id="status"
                    options={status}
                    className="input"
                  />
                </div>
                <DialogActions className={classes.action}>
                  <Button
                    onClick={handleClose}
                    color="primary"
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    color="secondary"
                    autoFocus
                    type="submit"
                    variant="contained"
                  >
                    {dataEdit ? "UPDATE" : "SAVE"}
                  </Button>
                </DialogActions>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
