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
    padding: "0 30px",
  },
}));

function Header(props) {
  const { title, onSearch } = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [query, setQuery] = useState("");
  const classes = useStyles();

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({query});
    onSearch(query)
  };
  return (
    <div className={classes.header}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className={classes.action}>
        <form
          noValidate
          autoComplete="off"
          className={classes.search}
          onSubmit={(e) => handleSearch(e)}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            placeholder="Search..."
            InputProps={{
              className: classes.input,
            }}
            onChange={(e)=>handleOnChange(e)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
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
