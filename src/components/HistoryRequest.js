/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Paper, Typography } from "@material-ui/core";
import AvatarInfo from "./AvatarInfo";
import { Pagination } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/actions/history";
import BackdropCustom from "./BackdropCustom";

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
    padding: "10px 10px",
    backgroundColor: "#fcfade",
    "& h4": {
      margin: "0",
      marginTop: "10px",
      fontSize: "12px",
      color: "#1c917b",
    },
    "& p": {
      margin: "0",
      color: "#777",
      fontSize: "12px",
    },
  },
});

export default function HistoryRequest() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setParams] = useState(1);
  const dataHistories = useSelector((state) => state.historyReducer);
  const last_page = dataHistories?.data?.last_page;
  const loading = dataHistories?.loading;
  const histories = dataHistories?.data?.data;
  const filter = {
    params: { page },
  };
  useEffect(() => {
    dispatch(history(filter));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);
  return (
    <>
      <h2>History request</h2>
      {histories
        ? histories.map((history, index) => {
            const { content, created_at, updated_at, request, user } = history;
            const check = content.includes("{");
            const contentJSON = check ? JSON.parse(content) : content;
            const userName = user?.name;
            return (
              <Card className={classes.Card} key={index}>
                <AvatarInfo name={userName} created_at={created_at} />
                {contentJSON === content ? (
                  <>
                    <h4>Thay đổi comment:</h4>
                    <p>{content}</p>
                  </>
                ) : (
                  ""
                )}
                {contentJSON?.Name ? (
                  <>
                    <h4>Thay đổi tên request:</h4>
                    <p>{contentJSON?.Name}</p>
                  </>
                ) : (
                  ""
                )}
                {contentJSON?.Content ? (
                  <>
                    <h4>Thay đổi nội dung request:</h4>
                    <p>{contentJSON?.Content}</p>
                  </>
                ) : (
                  ""
                )}
                {contentJSON?.Updated ? (
                  <>
                    <h4>Thay đổi nội dung request:</h4>
                    <p>{contentJSON?.Updated}</p>
                  </>
                ) : (
                  ""
                )}
              </Card>
            );
          })
        : ""}
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
