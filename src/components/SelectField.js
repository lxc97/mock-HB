import React from "react";
import { FormGroup, TextField } from "@material-ui/core";
import { ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  select: {
    outlineColor: "#ccc",
  },
  inputLabel: {
    color: "#fff",
  },
  error: {
    color: theme.palette.error.main,
  },
}));
const customStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "yellow" : "#ccc",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {},
    cursor: "pointer",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "#777"
        : isFocused
        ? "#777"
        : null,
      color: isSelected ? "#fff" : null,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: "none",
      },
    };
  },
};

function SelectField(props) {
  const classes = useStyles();
  const { form, field, options } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.id === value);

  const handleSelectedOptionChange = (selectedOption) => {
    console.log(selectedOption)
    const selectedValue = selectedOption
      ? selectedOption.id
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: Number(selectedValue),
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <div>
      <FormGroup>
        <Select
          id={name}
          name={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
          options={options}
          styles={customStyles}
          className={showError ? "is-invalid" : ""}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />

        <ErrorMessage name={name}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </FormGroup>
    </div>
  );
}

export default SelectField;
