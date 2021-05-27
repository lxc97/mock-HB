import React, { useEffect } from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import Header from "./Header";
import List from "../../components/List";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/user";

const useStyles = makeStyles((theme) => ({}));

function ListUserPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dataUsers = useSelector((state) => state.userReducer).data;
  console.log(dataUsers);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const dataTitles = ["Name", "Ma NV", "Department", "Role", "Status"];
  return (
    <LayoutDefault>
      <Header title="List users" />
      <List dataTitles={dataTitles}>
        {dataUsers
          ? dataUsers.map((user, index) => {
              const { id, name, status, staff_id, department, role } = user;
              const nameDepartment = department.name;
              const nameRole = role.name;
              return (
                <TableRow
                  key={id}
                  // onClick={() => handleChangePage(id)}
                  className={classes.tableRow}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{nameDepartment}</TableCell>
                  <TableCell>{nameRole}</TableCell>
                  <TableCell>{status}</TableCell>
                </TableRow>
              );
            })
          : null}
      </List>
    </LayoutDefault>
  );
}

export default ListUserPage;
