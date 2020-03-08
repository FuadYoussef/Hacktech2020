import React, { Component, useCallback } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import { withRouter } from "react-router";
import app from "../base";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import SuccessPage from './SuccessPage';

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
`;


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
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
/*
export default class RegisterPage extends Component {
    render() {
        return(
          <Wrapper className="base-container">
            <TextField id="outlined-basic" label="email" variant="outlined"/>
            <TextField id="outlined-basic" label="username" variant="outlined"/>
            <TextField id="outlined-basic" label="password" variant="outlined"/>
            <Button as="a" href="/">Register</Button>
          </Wrapper>
        )
    }
}
*/