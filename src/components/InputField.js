import React from "react";
import { FormGroup, TextField } from "@material-ui/core";
import { ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    height: "40px",
  },
  colorInput: {
    color: "#fff",
    height: "40px",
  },
  inputLabel: {
    color: "#fff",
  },
  error: {
    color: theme.palette.error.main,
  },
  textField: {
    margin: "0",
  },
}));

function InputField(props) {
  const classes = useStyles();
  const {
    form,
    field,
    variant,
    margin,
    label,
    autoComplete,
    type,
    colorInput,
    placeholder,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div>
      <FormGroup>
        <TextField
          {...field}
          variant={variant}
          margin={margin}
          fullWidth
          id={name}
          label={label}
          autoComplete={autoComplete}
          type={type}
          error={showError ? true : false}
          InputProps={
            colorInput
              ? { className: classes.colorInput }
              : { className: classes.input }
          }
          InputLabelProps={{ className: classes.inputLabel }}
          className={classes.textField}
          placeholder={placeholder}
        />
        <ErrorMessage name={name}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </FormGroup>
    </div>
  );
}

export default InputField;
