import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequest, requestList } from "../redux/actions/listRequest";
import { Link, useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import BackdropCustom from "./BackdropCustom";
import { STATUS } from "../constants/type";
import DeleteIcon from "@material-ui/icons/Delete";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles((theme) => ({
  colorTable: {
    backgroundColor: "#b0b4af99",
  },
  pagination: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  tableRow: {
    "& .status": {
      "& .action": {
        display: "flex",
        justifyContent: "space-between",
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

export default function ListRequest(props) {
  const { dataTitles } = props;
  const { filter } = props;
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const listRequests = useSelector((state) => state.listRequest);
  const { loading } = listRequests;
  const requests = listRequests.data ? listRequests.data : "";
  const { last_page } = requests;
  const rows = requests.data ? requests.data : "";
  const [page, setParams] = useState(1);
  const filters = {
    params: { ...filter, page },
  };
  useEffect(() => {
    dispatch(requestList(filters));
  }, [page]);

  const handleChangePage = (id) => {
    history.push({ pathname: `/request/show/${id}`, state: { id: id } });
  };

  const handleDelete = (id) => {
    dispatch(deleteRequest(id));
  };

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.colorTable}>
            {dataTitles.map((title, index) => (
              <TableCell key={index}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.children}
          {rows
            ? rows.map((row) => {
                const {
                  id,
                  name,
                  content,
                  user,
                  due_date,
                  category,
                  manager,
                  status,
                } = row;
                const author = user?.name;
                const categoryName = category?.name;
                const assignee = manager?.name;
                return (
                  <TableRow
                    key={id}
                    // onClick={() => handleChangePage(id)}
                    className={classes.tableRow}
                  >
                    <TableCell className="tableCell">{name}</TableCell>
                    <TableCell>{content}</TableCell>
                    <TableCell>{author}</TableCell>
                    <TableCell>{due_date}</TableCell>
                    <TableCell>{categoryName}</TableCell>
                    <TableCell>{assignee}</TableCell>
                    <TableCell>{STATUS[status]}</TableCell>
                    <TableCell className="status">
                      <div className="action">
                        <LaunchIcon
                          onClick={() => handleChangePage(id)}
                          className={classes.btnAction}
                        />
                        <DeleteIcon
                          className={classes.btnAction}
                          color="error"
                          onClick={() => handleDelete(id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>

      <Box py={3} display="flex" justifyContent="center">
        <Pagination
          count={last_page}
          color="secondary"
          variant="outlined"
          onChange={(event, value) => setParams(value)}
        />
      </Box>
      <BackdropCustom loading={loading} />
    </>
  );
}
