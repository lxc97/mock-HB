import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FastField, Form, Formik } from "formik";
import InputField from "../../components/InputField";

import imgBackgound from "../../assets/image/conference-room.jpg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
import { getToken } from "../../utils/LocalStorageHandler";
import { Redirect } from "react-router";
import Loading from "../../components/Loading";
import Notification from "../../components/Notification";
import BackdropCustom from "../../components/BackdropCustom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${imgBackgound})`,
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    maxWidth: "100%",
    height: "100vh",
    position: "relative",
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
    maxWidth: "444px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  typography: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "38px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& .input": {
      color: "#fff"
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgotPassword: {
    textAlign: "end",
    paddingTop: "30px",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const token = getToken();
  const dispatch = useDispatch();

  const dataLogin = useSelector((state) => state.authReducer);
  const { loading, error, notify } = dataLogin;
  console.log(notify);
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This mail field is required!")
      .email("This field is email"),
    password: Yup.string().required("This password field is required!"),
  });

  const responseGoogle = (response) => {};
  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <Container component="main" className={classes.container}>
          <div className={classes.paper}>
            <Typography
              component="h1"
              variant="h5"
              classes={{ root: classes.typography }}
            >
              Sign in
            </Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {(formikProps) => {
                return (
                  <Form className={classes.form}>
                    <div className="input">
                      <h3>Email</h3>
                      <FastField
                        name="email"
                        component={InputField}
                        variant="outlined"
                        margin="normal"
                        id="email"
                        colorInput={true}
                        placeholder="example@hblab.vn"
                        className={classes.input}
                      />
                    </div>
                    <div className="input">
                    <h3>Password</h3>
                    <FastField
                      name="password"
                      component={InputField}
                      variant="outlined"
                      margin="normal"
                      id="password"
                      type="Password"
                      colorInput={true}
                      placeholder="********"
                    />
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>
                    <GoogleLogin
                      clientId="755262927113-7gj0jhann30k2uhofpm91mgqbffl8n75.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                      render={(renderProps) => (
                        <Button
                          fullWidth
                          variant="outlined"
                          color="primary"
                          className={classes.submit}
                          disabled={renderProps.disabled}
                          onClick={renderProps.onClick}
                        >
                          Sign in with google
                        </Button>
                      )}
                    />
                    <Grid container>
                      <Grid item xs className={classes.forgotPassword}>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <Notification notify={notify} />
          <BackdropCustom loading={loading} />
        </Container>
      )}
    </>
  );
}
