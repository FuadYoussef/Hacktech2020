import React, { Component, useCallback } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import { withRouter } from "react-router";
import app from "../base";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import SuccessPage from './SuccessPage';
import Button from "@material-ui/core/Button";

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

<<<<<<< HEAD
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

=======
>>>>>>> aa840bedd7e2095ca8d4ebc064490cd0c6c7028e
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
      /*var refData = newRef.push();
      refData.set({email: email.value});*/
      app.database().ref('users/' + firebase.auth().currentUser.uid).set({
        email: email.value
      });
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Wrapper>
      <h1 style={{paddingBottom: '8px'}}>Sign Up</h1>
      <LoginComponent onSubmit={handleSignUp}>
        <TextField name="email" label="email" id="outlined-basic" variant="outlined"/>
        <TextField name="password" label="password" id="outlined-basic" variant="outlined"/>

        <ButtonContainer>
          <Button variant="contained" color="primary" type="submit">Register</Button>
          <Button variant="contained" color="primary">Login</Button>
        </ButtonContainer>
      </LoginComponent>
    </Wrapper>
  );
};

export default withRouter(SignUp);
