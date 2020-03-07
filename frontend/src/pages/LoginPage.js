import React, { Component, useCallback, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import SuccessPage from './SuccessPage';
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";

/* Wrapper is used to position LoginComponent right in the center
*  NOTE: min-height: 100vh ensure the div is the same height as the screen
*/
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const LoginComponent = styled.form`
  padding: 32px;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 30vh;
`;

const LoginButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        console.log("works")
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  /* Disabled for now */
  // if (currentUser) {
  //   return <Redirect to="/SuccessPage" />;
  // }

  return (
    <Wrapper>
      <h1 style={{paddingBottom: '8px'}}> Login </h1>
      <LoginComponent onSubmit={handleLogin}>
        <TextField id="outlined-basic" label="email" variant="outlined"/>
        <TextField id="outlined-basic" label="password" variant="outlined"/>

        <Link to="/" underline="none">
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Link>
        <Link style={{fontSize: '12px'}} to="/"> Forgot your password? </Link>

        <div class="horizontal divider">
          </div>
      </LoginComponent>
    </Wrapper>
  );
};

export default withRouter(Login);
