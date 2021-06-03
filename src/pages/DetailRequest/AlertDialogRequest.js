import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core";
import InputField from "../../components/InputField";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/SelectField";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/actions/category";
import { assignee } from "../../redux/actions/assignee";
import { updateRequest } from "../../redux/actions/requestDetail";
import { useParams } from "react-router";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: "900px",
    width: "1200px",
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
  paper: {
    margin: "20px 0px",
    padding: "30px",
  },
}));

export default function AlertDialogRequest(props) {
  const idRequest = useParams();
  const classes = useStyles();
  const { open, setOpen, dataEdit, dataFix } = props;
  console.log({dataFix});
  const dispatch = useDispatch();
  const assignees = useSelector((state) => state.assigneeReducer).data;
  const categorys = useSelector((state) => state.categoryReducer).data;
  const handleClose = () => {
    setOpen(false);
  };

  const initialValue = {
    name: dataFix ? dataFix?.name : "",
    content: dataFix ? dataFix?.content : "",
    manager_id: dataFix ? dataFix?.manager_id : null,
    category_id: dataFix ? dataFix?.category_id : null,
    due_date: dataFix ? dataFix?.due_date?.slice(0, 10) : "",
    priority: dataFix ? dataFix?.priority : null,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("This name field is required!")
      .max(50, "must be less than 50 words"),
    content: Yup.string().required("This content field is required!"),
    manager_id: Yup.number()
      .required("This assignee field is required!")
      .nullable(),
    category_id: Yup.number()
      .required("This category field is required!")
      .nullable(),
    priority: Yup.number()
      .required("This priority field is required!")
      .nullable(),
    due_date: Yup.string().required("This date field is required!"),
  });

  const handleSubmit = (values) => {
    const data = {
      ...values,
      request_id: Number(idRequest.id),
    };
    dispatch(updateRequest(data));
    handleClose();
    console.log("updateRe", data);
  };

  const priorityList = [
    { id: 1, name: "Low" },
    { id: 2, name: "Medium" },
    { id: 3, name: "High" },
  ];

  useEffect(() => {
    dispatch(assignee());
    dispatch(category());
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
        <h3>Edit Request</h3>
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
                <Paper className={classes.paper}>
                  <h3>Name Request</h3>
                  <FastField
                    name="name"
                    component={InputField}
                    variant="outlined"
                    margin="normal"
                    id="name"
                  />
                  <h3>Content</h3>
                  <FastField
                    name="content"
                    component={InputField}
                    variant="outlined"
                    margin="normal"
                    id="content"
                  />
                  {/* <h3>Status</h3>
                <FastField
                  name="status"
                  component={SelectField}
                  id="status"
                  options={status}
                /> */}

                  <h3>Assignee</h3>
                  <FastField
                    name="manager_id"
                    component={SelectField}
                    id="manager_id"
                    options={assignees}
                  />
                  <h3>Category</h3>
                  <FastField
                    name="category_id"
                    component={SelectField}
                    id="category_id"
                    options={categorys}
                  />
                  <h3>Due date</h3>
                  <FastField
                    id="due_date"
                    component={InputField}
                    name="due_date"
                    type="date"
                    variant="outlined"
                  />
                  <h3>Priority</h3>
                  <FastField
                    name="priority"
                    component={SelectField}
                    id="priority"
                    options={priorityList}
                  />
                </Paper>

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
