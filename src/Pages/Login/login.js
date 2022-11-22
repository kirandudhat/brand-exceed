import React, { useEffect, useState } from "react";
import qtech_logo from "../../assest/img/logo.png";
import Blob from "../../assest/img/blob.svg";
import round from "../../assest/img/round.svg";
import round2 from "../../assest/img/round2.svg";
import round3 from "../../assest/img/round3.svg";
import { AUTH_LOGIN } from "../../redux/auth/types";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LoadingButton } from "@mui/lab";
import { Container, makeStyles } from "@material-ui/core";
import history from "../../Utils/History/History";
import { getUser } from "../../Utils/common/Common";

const InputField = ({ field, form, ...props }) => {
  const inputFieldProps = props.inputFieldProps;
  return (
    <>
      <FormControl sx={{ width: "80%" }} variant="standard">
        <TextField
          fullWidth
          id={inputFieldProps?.id}
          name={inputFieldProps?.name}
          type={inputFieldProps?.type}
          label={inputFieldProps?.label}
          variant={inputFieldProps?.variant}
          value={form?.values[inputFieldProps?.name]}
          onChange={form?.handleChange}
          error={
            form?.touched[inputFieldProps?.name] &&
            Boolean(form?.errors[inputFieldProps?.name])
          }
          helperText={
            (form?.touched[inputFieldProps?.name] &&
              form?.errors[inputFieldProps?.name]) ??
            " "
          }
          InputProps={inputFieldProps?.InputProps}
        />
      </FormControl>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  },
  loginPageContainer: {
    maxWidth: "400px",
    maxHeight: "500px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
    position: "relative",
    zIndex: "3",
    overflow: "hidden",
  },
  qtechLogo: {
    width: "150px",
    height: "150px",
    marginBottom: "0px",
  },
  qtechText: {
    color: "#4B4B4B !important",
    margin: "35px 0 20px 0 !important",
    fontWeight: "bold !important",
  },
  formWrapper: {
    textAlign: "center",
  },
  loginBtn: {
    margin: "16px 0 25px 0 !important",
    fontSize: "14px !important",
    fontWeight: "bold !important",
    backgroundColor: "#565656 !important",
    color: "white !important",
    width: "80% !important",
    letterSpacing: "1px !important",
  },
  disabledBtn: {
    margin: "16px 0 25px 0 !important",
    fontSize: "14px !important",
    fontWeight: "bold !important",
    color: "#565656 !important",
    width: "80% !important",
  },
  arrowIconBox: {
    display: "flex",
    backgroundColor: "white",
    color: "green",
    borderRadius: "50%",
    marginInline: "10px",
  },
  blobSvg: {
    position: "absolute",
    top: "-165px",
    right: "-155px",
    zIndex: "-1",
    opacity: "0.8",
    transform: "rotate(-61deg)",
  },
  roundSvg: {
    position: "absolute",
    top: "120px",
    right: "-50px",
    zIndex: "-1",
    opacity: "0.8",
  },
  round2Svg: {
    position: "absolute",
    top: "180px",
    right: "35px",
    zIndex: "-1",
    opacity: "0.8",
  },
  round3Svg: {
    position: "absolute",
    top: "230px",
    right: "5px",
    zIndex: "-1",
    opacity: "0.8",
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.authReducer.loading);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  
  const passwordInputProps = {
    id: "password",
    name: "password",
    label: "Password",
    variant: "standard",
    type: showPassword ? "text" : "password",
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    },
  };

  const emailInputProps = {
    id: "email",
    name: "email",
    label: "Email",
    variant: "standard",
    type: "text",
  };

  const initialValues = {
    email: "",
    password: "",
  };
let user = getUser() 
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (fields)=> {
    dispatch({ type: AUTH_LOGIN, payload: fields })
    // history.push('/admin/survey')
  }
  // useEffect(() => {
  //   if(user){
      
  //     history.push('/admin/')
  //   }
  // },[user])
  return (
    <>
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Paper elevation={4}>
            <div className={classes.loginPageContainer}>
              <img
                src={qtech_logo}
                className={classes.qtechLogo}
                alt="Qtech_logo"
              />
              <Typography className={classes.qtechText}>
                Log in to Brand Exceed
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(fields) =>
                   handleSubmit(fields) 
                }
                render={() => (
                  <Form className={classes.formWrapper}>
                    <Field
                      component={InputField}
                      inputFieldProps={emailInputProps}
                    />
                    <Field
                      component={InputField}
                      inputFieldProps={passwordInputProps}
                    />
                    <LoadingButton
                      type="submit"
                      disabled={isLoading}
                      className={
                        isLoading ? classes.disabledBtn : classes.loginBtn
                      }
                      endIcon={
                        isLoading ? (
                          <CircularProgress
                            size="1.4rem"
                            style={{ color: "#565656" }}
                          />
                        ) : null
                      }
                      variant="contained"
                    >
                      {isLoading ? (
                        "please wait..."
                      ) : (
                        <>
                          <Box className={classes.arrowIconBox}>
                            <ArrowForwardIcon fill="red" fontSize="small" />
                          </Box>
                          CONTINUE
                        </>
                      )}
                    </LoadingButton>
                  </Form>
                )}
              />
              <img src={Blob} className={classes.blobSvg} />
              <img src={round} className={classes.roundSvg} />
              <img src={round2} className={classes.round2Svg} />
              <img src={round3} className={classes.round3Svg} />
            </div>
          </Paper>
        </div>
      </Container>
    </>
  );
};
export default Login;
