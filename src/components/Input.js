import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {

    width: '100%',
  },
  formText:{
    width:`calc(30% - 40px)`,
    margin: "8px",
  }
}));
export default function Input(props) {
  const classes = useStyles();
    const { name, label, value,error=null, onChange } = props;
    return (
        <TextField className={classes.formText}

            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
