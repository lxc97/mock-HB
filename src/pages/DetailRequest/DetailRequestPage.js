/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderDetailRequest from "../../components/HeaderDetailRequest";
import { Button, Paper, TextField } from "@material-ui/core";
import AvatarInfo from "../../components/AvatarInfo";
import RequestProperty from "../../components/RequestProperty";
import Comment from "../../components/Comment";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { requestDetail } from "../../redux/actions/requestDetail";
import LayoutDefault from "../../layout/LayoutDefault";
import { postComment } from "../../redux/actions/comment";
import Tag from "../../components/Tag";
import { STATUS_CLOSE } from "../../constants/type";

const useStyles = makeStyles((theme) => ({
  detailRequest: {
    padding: "20px 50px",
  },
  main: {
    padding: "20px 30px",
  },
  paper: {
    marginTop: "20px",
  },
  contentRequest: {
    width: "50%",
    marginTop: "20px",
    lineHeight: "30px",
    fontSize: "16px",
  },
  requestProperties: {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  property: {
    width: "48%",
    borderTop: "1px solid #777",
    borderBottom: "1px solid #777",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  comment: {
    border: "1px solid #777",
    padding: "20px",
    backgroundColor: "#fcfade",
    borderRadius: "6px"
  },
  item: {
    marginBottom: "30px",
    borderBottom: "1px solid #777"
  },
  addComment: {
    position: "sticky",
    bottom: "0",
    padding: "15px 20px",
    boxShadow: "0 0 10px #777",
  },
  tag: {
    margin: "0 auto",
    display: "flex",
  },
  footerComment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#777",
  },
  inputAdd: {
    height: "40px",
  },
}));

function DetailRequestPage(props) {
  const classes = useStyles();
  const idRequest = useParams();
  const dispatch = useDispatch();
  const nameRequestProperty = ["Category", "Assignee"];
  const [value, setValue] = useState("");

  const numberCommentDefault = 3;
  const [visible, setVisible] = useState(numberCommentDefault);

  const dataRequests = useSelector((state) => state.requestDetail);
  console.log({ dataRequests });

  const { data, loading } = dataRequests;
  const { request, comments } = data ? data : {};
  console.log(dataRequests);
  const { status, user, created_at, content, category, name, manager } = request
    ? request[0]
    : "";
  const assignee = manager ? manager.name : "";
  const useName = user ? user.name : "";
  const categoryName = user ? category.name : "";

  useEffect(() => {
    dispatch(requestDetail(idRequest));
  }, [idRequest]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleShowMoreComment = () => {
    setVisible(visible + numberCommentDefault);
  };
  const handleHiddenComment = () => {
    setVisible(numberCommentDefault);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataPostComment = {
      content: value,
      request_id: Number(idRequest.id),
    };
    console.log({ dataPostComment });
    dispatch(postComment(dataPostComment));
    dispatch(requestDetail(idRequest));
    setValue("");
  };

  return (
    <LayoutDefault>
      <div className={classes.detailRequest}>
        <HeaderDetailRequest
          status_admin={status}
          content={name}
          // loading={loading}
        />
        <Paper className={classes.paper}>
          <div className={classes.main}>
            <AvatarInfo
              name={useName}
              created_at={created_at}
              loading={loading}
            />
            <div className={classes.contentRequest}>{content}</div>

            <div className={classes.requestProperties}>
              {nameRequestProperty.map((property, index) => {
                console.log();
                return (
                  <div className={classes.property} key={index}>
                    <RequestProperty name={property} />
                    {property === "Assignee" ? (
                      <div className={classes.tag}>
                        <Tag name={assignee} isAvatar={true} />
                      </div>
                    ) : (
                      <div className={classes.tag}>
                        <Tag
                          name={categoryName}
                          icon={false}
                          isAvatar={false}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              <h4>
                Comment (
                {visible > comments?.length ? comments?.length : visible}/
                {comments ? comments.length : ""})
              </h4>
              <div className={classes.comment}>
                {comments
                  ? comments.slice(0, visible).map((comment, index) => {
                      const { content, created_at, user } = comment;
                      const { name } = user;
                      console.log({ content });
                      return (
                        <div className={classes.item} key={index}>
                          <Comment
                            name={name}
                            created_at={created_at}
                            content={content}
                          />
                        </div>
                      );
                    })
                  : ""}
                <div className={classes.footerComment}>
                  {comments ? (
                    <Button
                      onClick={handleShowMoreComment}
                      disabled={visible < comments.length ? false : true}
                    >
                      Load more comments
                    </Button>
                  ) : (
                    ""
                  )}
                  {visible > numberCommentDefault ? (
                    <Button onClick={handleHiddenComment}>Hide comments</Button>
                  ) : (
                    ""
                  )}
                  <div>
                    ({visible > comments?.length ? comments?.length : visible}/
                    {comments ? comments.length : ""})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
      {status != STATUS_CLOSE ? (
        <Paper className={classes.addComment}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-multiline-flexible"
              rowsMax={4}
              value={value}
              onChange={handleChange}
              variant="outlined"
              placeholder="Write a comment, use @mention to notify a colleague..."
              fullWidth
              InputProps={{
                className: classes.inputAdd,
              }}
            />
          </form>
        </Paper>
      ) : (
        ""
      )}
      {/* <BackdropCustom loading={loading} /> */}
    </LayoutDefault>
  );
}

export default DetailRequestPage;
