import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./firebase";
import { useStateValue } from "./Stateprovider";
import "./Login.css";
import { actionTypes } from "./reducer";

function Login() {
  const [name, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src={`https://lh3.googleusercontent.com/q9yz_I4SarXzN8IHDSfwSLHcSegOEOuwPIxoxi2WtQO5CyA0e08mPrCx6jj_y3SQzPILSIJGVd5bmTKBdU9Nneys7pl8kqI8pnReqsaGs3fgVZGAlp9Zx6Z6TAQNh_9FmPT0X2XQnw=w474-h315-p-k`}
          alt=""
        />
        <div className="login-text">
          <h1>Sign in to WeChat</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign in with google
        </Button>
      </div>
    </div>
  );
}

export default Login;
