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
          src={`https://lh3.googleusercontent.com/GK-EUB7pehkuTVgbXyuFUIVGbCYOp1iv8tv3EHGYZPu2g5vulacxCHaLgAtkGX24-5mKKPhkV8oHCRZpHk0woqnCCcC7Zj4AwQw6TaJOQXxSANocI7otouf50AHFlGq6Pi0OTnWV1g=w600-h315-p-k`}
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
