import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import AlertDialog from "../../components/AlertDialog";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: "30px",
    "& .title": {
      textAlign: "center",
    },
  },
  input: {
    height: "40px",
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  search: {
    width: "85%",
    display: "flex",
    alignItems: "center",
  },
  button: {
    display: "flex",
    height: "40px",
  },
  btnAdd: {
    padding: "0 30px"
  }
}));

function Header(props) {
  const { title } = props;
  const [openEdit, setOpenEdit] = useState(false);
  const classes = useStyles();

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  return (
    <div className={classes.header}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className={classes.action}>
        <form noValidate autoComplete="off" className={classes.search}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            placeholder="Search..."
            InputProps={{
              className: classes.input,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            SEARCH
          </Button>
        </form>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpenEdit}
            className={classes.btnAdd}
          >
            ADD
          </Button>
        </div>
      </div>
      <AlertDialog open={openEdit} setOpen={setOpenEdit} />
    </div>
  );
}

export default Header;
