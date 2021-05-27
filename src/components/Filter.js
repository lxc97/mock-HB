import React, { useState, useEffect } from "react";
import Button from "./Button";
import Select from "./Select";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import { filterRequest } from "../redux/actions/listRequest";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../redux/actions/category";
import { assignee } from "../redux/actions/assignee";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formBtn: {
    display: "flex",
    justifyContent: "center",
    margin: "15px",
    gap: "100px",
  },
  // formText: {
  //   width: "100%",
  //   margin: "12px",
  // },
  textField: {
    width: "30%",
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "20px",
  },
}));
const statusItems = [
  { id: 1, name: "Mr. Scotty Nader" },
  { id: 2, name: "admin" },
  { id: 3, name: "hainv" },
  { id: 4, name: "Leif Hudson" },
  { id: 5, name: "Carter McDermott" },
  { id: 6, name: "chienlx" },
  { id: 7, name: "Mabel Sawayn" },
];
const initialFValues = {
  name_request: "",
  content_request: "",
  date: new Date(),
  status: "",
  author_request: "",
  assign_request: "",
  category_request: "",
};
export default function Filter(props) {
  const { onFilter } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const dataCategory = useSelector((state) => state.categoryReducer).data;
  const dataAssignee = useSelector((state) => state.assigneeReducer).data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log({value})
  };
  const resetForm = () => {
    setValues(initialFValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      values,
    };
    dispatch(filterRequest(filters));
    onFilter(values);
    console.log("filter", filters);
  };

  useEffect(() => {
    dispatch(category())
    dispatch(assignee())
  }, []);

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FilterListIcon />
          <Typography color="primary">Filter options</Typography>
        </AccordionSummary>
        <form onSubmit={handleSubmit}>
          <div className={classes.main}>
            <div className={classes.textField}>
              <h3>Name</h3>
              <TextField
                name="name_request"
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                value={values.name_request}
              />
            </div>
            <div className={classes.textField}>
              <h3>Content</h3>
              <TextField
                variant="outlined"
                fullWidth
                name="content_request"
                value={values.content_request}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.textField}>
              <h3>Due date</h3>
              <TextField
                name="due_date_request"
                type="date"
                variant="outlined"
                // value={values.date}
                onChange={handleInputChange}
                fullWidth
              />
            </div>

            {/* <Input
              label="Content"
              name="content_request"
              value={values.content_request}
              onChange={handleInputChange}
            /> */}
            {/* <DatePicker
              name="date"
              label="Date"
              value={values.date}
              onChange={handleInputChange}
            /> */}
            <div className={classes.textField}>
              <h3>Status</h3>
              <Select
                name="status"
                value={values.status}
                onChange={handleInputChange}
                options={statusItems}
                fullWidth
              />
            </div>
            <div className={classes.textField}>
              <h3>Auth</h3>
              <Select
                name="author_request"
                value={values.author_request}
                onChange={handleInputChange}
                options={statusItems}
                fullWidth
              />
            </div>
            <div className={classes.textField}>
              <h3>Assign</h3>
              <Select
                name="assign_request"
                value={values.assign_request}
                onChange={handleInputChange}
                options={dataAssignee}
                fullWidth
              />
            </div>
            <div className={classes.textField}>
              <h3>Category</h3>
              <Select
                name="category_request"
                value={values.category_request}
                onChange={handleInputChange}
                options={dataCategory}
                fullWidth
              />
            </div>
          </div>

          {/* <Select
              name="status"
              label="Status"
              value={values.status}
              onChange={handleInputChange}
              options={statusItems}
            />
            <Select
              name="author_request"
              label="Author"
              value={values.author_request}
              onChange={handleInputChange}
              options={statusItems}
            /> */}
          {/* <Select
              name="assign_request"
              label="Assign"
              value={values.assign_request}
              onChange={handleInputChange}
              options={statusItems}
            /> */}
          {/* <Select
              name="category_request"
              label="Category"
              value={values.category_request}
              onChange={handleInputChange}
              options={statusItems}
            /> */}
          <div className={classes.formBtn}>
            <Button type="submit" text="Filter" />
            <Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </form>
      </Accordion>
    </div>
  );
}
