import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "../../components/Button";
import TextField from "@material-ui/core/TextField";
// import TextField from "./Input"
import Select from "../../components/Select";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../../redux/actions/listRequest";
import LayoutDefault from "../../layout/LayoutDefault";
import { category } from "../../redux/actions/category";
import { assignee } from "../../redux/actions/assignee";
import Notification from "../../components/Notification";
import BackdropCustom from "../../components/BackdropCustom";

const useStyles = makeStyles((theme) => ({
  detailRequest: {
    padding: "20px 50px",
  },
  main: {
    padding: "20px 30px",
    margin: "30px 0",
  },
  paper: {
    marginTop: "20px",
    width: "100%",
  },

  textarea: {
    width: "900px",
    marginTop: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    margin: "20px",
  },
  selectInput: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "30px 0px",
  },
  textInput: {
    width: "100%",
    display: "flex",
  },
  textField: {
    width: "48%",
  },
}));
const statusItems = [
  { id: 1, name: "Clara Stoke" },
  { id: 2, name: "MR.Sahara" },
  { id: 3, name: "Jonhan La" },
  { id: 4, name: "Mss. Lads" },
];
const initialFValues = {
  name: "",
  content: "",
  manager_id: "",
  status: 1,
  category_id: "",
  priority: "",
  dueDate: new Date(),
};
const priorityList = [
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 2, name: "High" },
];

function CreateRequest(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const dataCategory = useSelector((state) => state.categoryReducer).data;
  const dataAssignee = useSelector((state) => state.assigneeReducer).data;
  const dataRequest = useSelector((state) => state.listRequest);
  const { notify, loading } = dataRequest;

  const validateOnChange = false;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("value...: ", value);
    setValues({
      ...values,
      [name]: value,
    });
    console.log("Nhap value", value);
    if (validateOnChange) validate({ [name]: value });
  };
  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      resetForm();
    }
    const data = {
      values,
    };
    dispatch(addRequest(data));
    // console.log("CreateRequest click Submit", data);
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("content" in fieldValues)
      temp.content = fieldValues.content ? "" : "This field is required.";
    if ("manager_id" in fieldValues)
      temp.manager_id = fieldValues.manager_id ? "" : "This field is required.";
    if ("category_id" in fieldValues)
      temp.category_id = fieldValues.category_id
        ? ""
        : "This field is required.";
    if ("priority" in fieldValues)
      temp.priority = fieldValues.priority ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  useEffect(() => {
    dispatch(category());
    dispatch(assignee());
  }, []);

  return (
    <LayoutDefault>
      <form className={classes.detailRequest} onSubmit={handleSubmit}>
        <div className={classes.header}>
          <div>
            <h1>Create Request</h1>
          </div>
          <Button type="submit" className={classes.btn} text="Create" />
        </div>

        <TextField
          label="Title"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="Name Request"
          error={errors.name}
          variant="outlined"
          fullWidth
        />
        <Paper className={classes.paper}>
          <div className={classes.main}>
            <TextField
              label="Content"
              multiline
              rows={8}
              placeholder="Add a description"
              name="content"
              value={values.content}
              onChange={handleInputChange}
              error={errors.content}
              variant="outlined"
              fullWidth
            />

            <div className={classes.selectInput}>
              <div className={classes.textField}>
                <h3>Status</h3>
                <TextField
                  className={classes.textInput}
                  defaultValue="Open"
                  name="status"
                  // value={values.status}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  error={errors.status}
                />
              </div>
              <div className={classes.textField}>
                <h3>Due date</h3>
                <TextField
                  className={classes.textInput}
                  // defaultValue="Open"
                  name="due_date"
                  type="date"
                  variant="outlined"
                  onChange={handleInputChange}
                  error={errors.due_date}
                />
              </div>
              <div className={classes.textField}>
                <h3>Assign</h3>
                <Select
                  name="manager_id"
                  value={values.manager_id}
                  onChange={handleInputChange}
                  options={dataAssignee}
                  error={errors.manager_id}
                />
              </div>
              <div className={classes.textField}>
                <h3>Category</h3>
                <Select
                  name="category_id"
                  value={values.category_id}
                  onChange={handleInputChange}
                  options={dataCategory}
                  error={errors.category_id}
                />
              </div>
              <div className={classes.textField}>
                <h3>Priority</h3>
                <Select
                  name="priority"
                  value={values.priority}
                  onChange={handleInputChange}
                  options={priorityList}
                  error={errors.priority}
                />
              </div>
            </div>
          </div>
        </Paper>
      </form>
      <Notification notify={notify} />
      <BackdropCustom loading={loading} />
    </LayoutDefault>
  );
}

export default CreateRequest;
