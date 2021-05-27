import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  pagination: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  tableRow: {
    cursor: "pointer",
  },
}));

export default function List(props) {
  const { dataTitles, pagination } = props;
  const classes = useStyles();
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>
            {dataTitles.map((title, index) => (
              <TableCell key={index} >{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
      {pagination ? (
        <div className={classes.pagination}>
          <Pagination count={10} size="large" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
