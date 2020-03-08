import React, {Component, useCallback, useContext} from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import {withRouter, Redirect} from "react-router";
import app from "../base.js";
import {AuthContext} from "../Auth.js";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import img from "./backgroundImage1.jpg";

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
  background-image: url(${img});
`;

const LoginComponent = styled.form`
  padding: 32px;
  // background: white;
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

const Login = ({history}) => {
  const handleLogin = useCallback(
    async event => {
      console.log("handle login")
      event.preventDefault();
      const {email, password} = event.target.elements;
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

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
    return <Redirect push to="/dashboard"/>;
  }

  return (
    <Wrapper>
      <div>
        <Button variant="outlined" color="primary" href="/login"> Login </Button>
        <Button variant="outlined" color="primary" href="/"> Register </Button>
      </div>
      <h1 style={{paddingBottom: '8px', paddingTop: '20px'}}> Login </h1>
      <LoginComponent onSubmit={handleLogin}>
        <TextField name="email" label="email" id="outlined-basic" variant="outlined"/>
        <TextField name="password" label="password" id="outlined-basic" variant="outlined"/>
        {/*TODO: redirect to a home page*/}
        <Button variant="contained" color="primary" type="submit">Login</Button>
        <Link style={{fontSize: '12px'}} to="/"> Forgot your password? </Link>
      </LoginComponent>
    </Wrapper>
  );
};

export default withRouter(Login);
