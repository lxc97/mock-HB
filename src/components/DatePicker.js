import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
      root: {

        width: '100%',
      },

      formSelect:{
        width:`calc(30% - 40px)`,
        margin: "8px",
      }
    }));
export default function DatePicker(props) {

    const { name, label, value, onChange } = props
    const classes = useStyles();

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })


    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker disableToolbar variant="inline" className={classes.formSelect}
                label={label}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}

            />
        </MuiPickersUtilsProvider>
    )
}
