import React, { useEffect, useState } from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import { makeStyles } from "@material-ui/core/styles";
import List from "../../components/List";
import { useDispatch, useSelector } from "react-redux";
import {
  category,
  deleteCategory,
  updateCategory,
} from "../../redux/actions/category";
import { Chip, Paper, TableCell, TableRow } from "@material-ui/core";
import Header from "../ListUsers/Header";
import AlertDialog from "../../components/AlertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import AlertDialogDetail from "../../components/AlertDialogDetail";
import BackdropCustom from "../../components/BackdropCustom";
import Notification from "../../components/Notification";

const statusCategory = ["", "Enable", "Disable"];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  tableRow: {
    "& .status": {
      display: "flex",
      justifyContent: "space-between",
      "& .chip": {
        cursor: "pointer",
      },
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
  const [openDetail, setOpenDetail] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const dispatch = useDispatch();
  const dataCategories = useSelector((state) => state.categoryReducer);
  const loading = dataCategories?.loading;
  const notify = dataCategories?.notify;
  const categories = dataCategories?.data;
  console.log("dataCategories: ", dataCategories);
  const dataTitles = ["STT", "Name", "Assignee", "Status"];
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    dispatch(category());
  }, []);

  const handleChangePage = (data) => {
    setDataEdit(data);
    setOpen(true);
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  const handleDetailPage = (data) => {
    setOpenDetail(true);
    setDataEdit(data);
  };
  const handleSearch = (query) => {
    setKeyWord(query);
  };
  const handleChangeStatus = (data) => {
    console.log({ data });
    if (data.status === 1) {
      const newData = { ...data, status: 2 };
      dispatch(updateCategory(newData));
    } else {
      const newData = { ...data, status: 1 };
      dispatch(updateCategory(newData));
    }
  };

  return (
    <LayoutDefault>
      <Paper className={classes.paper}>
        <Header title="List categories" onSearch={handleSearch} />
        <List dataTitles={dataTitles} pagination={false}>
          {categories
            ? (keyWord
                ? categories.filter((list) => {
                    return list.name.toLowerCase().indexOf(keyWord) !== -1;
                  })
                : categories
              ).map((row, index) => {
                const { id, name, status, user, user_id } = row;
                const assignee_id = user?.id;
                const assignee = user?.name;
                const data = {
                  id,
                  name,
                  user_id,
                  assignee_id,
                  assignee,
                  status: Number(status),
                };
                return (
                  <TableRow key={id} className={classes.tableRow}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{assignee}</TableCell>
                    <TableCell className="status">
                      <Chip
                        size="small"
                        label={statusCategory[status]}
                        color={status == 1 ? "secondary" : "default"}
                        className="chip"
                        onClick={() => handleChangeStatus(data)}
                      />
                      <div className="action">
                        <ZoomOutMapIcon
                          className={classes.btnAction}
                          onClick={() => handleDetailPage(data)}
                        />
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
        <AlertDialogDetail
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
          dataEdit={dataEdit}
        />
        <Notification notify={notify} />
        <BackdropCustom loading={loading} />
      </Paper>
    </LayoutDefault>
  );
}

export default CategoryPage;
