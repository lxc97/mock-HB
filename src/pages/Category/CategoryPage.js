import React, { useEffect, useState } from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import { makeStyles } from "@material-ui/core/styles";
import List from "../../components/List";
import { useDispatch, useSelector } from "react-redux";
import { category, deleteCategory } from "../../redux/actions/category";
import { TableCell, TableRow } from "@material-ui/core";
import Header from "../ListUsers/Header";
import AlertDialog from "../../components/AlertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  tableRow: {
    "& .status": {
      display: "flex",
      justifyContent: "space-between",
      "& .action": {
        visibility: "hidden",
      },
    },

    "&:hover": {
      background: "#f5f5f5",
      "& .status .action": {
        visibility: "visible",
      },
    },
  },

  btnAction: {
    marginRight: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
}));

function CategoryPage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer).data;
  const dataTitles = ["STT", "Name", "Assignee", "Status"];

  useEffect(() => {
    dispatch(category());
  }, [  ]);

  const handleChangePage = (data) => {
    setDataEdit(data);
    setOpen(true);
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <LayoutDefault>
      <Header title="List categories" />
      <List dataTitles={dataTitles} pagination={true}>
        {categories
          ? categories.map((row, index) => {
              const { id, name, status, user, user_id } = row;
              const assignee_id = user?.id;
              const assignee = user?.name;
              const data = {
                id,
                name,
                user_id,
                assignee_id,
                status,
              };
              return (
                <TableRow key={id} className={classes.tableRow}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{assignee}</TableCell>
                  <TableCell className="status">
                    {status}
                    <div className="action">
                      <EditIcon
                        onClick={() => handleChangePage(data)}
                        className={classes.btnAction}
                      />
                      <DeleteIcon
                        className={classes.btnAction}
                        color="error"
                        onClick={() => handleDeleteCategory(id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          : null}
      </List>
      <AlertDialog open={open} setOpen={setOpen} dataEdit={dataEdit} />
    </LayoutDefault>
  );
}

export default CategoryPage;
