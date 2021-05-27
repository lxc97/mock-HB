import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Paper } from "@material-ui/core";
import AvatarInfo from "./AvatarInfo";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  paper: {
    marginBottom: "10px",
    padding: "10px",
  },
  Card: {
    marginBottom: "10px",
    padding: "10px 10px"
  }
});

export default function HistoryRequest() {
  const classes = useStyles();
  return (
    <>
      <h2>History request</h2>
        <Card className={classes.Card}>
          <AvatarInfo name="lxc" />
          <p>test history request</p>
        </Card>
        <Card className={classes.Card}>
          <AvatarInfo name="lxc" />
          <p>test history request</p>
        </Card>
        <Box py={3} display="flex" justifyContent="center">
        <Pagination
          count={2}
          color="secondary"
          variant="outlined"
          // onChange={(event, value) => setParams(value)}
        />
      </Box>
    </>
  );
}
