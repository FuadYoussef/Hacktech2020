import React, { Component, useCallback, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
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
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/SuccessPage" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);

/*
export default class LoginPage extends Component {
    render() {
        return(
          <Wrapper>
            <TextField id="outlined-basic" label="email" variant="outlined"/>
            <TextField id="outlined-basic" label="password" variant="outlined"/>
            <Button as="a" href="/">Login</Button>
            <a href="./">Forgot your password?</a>
            <div class="horizontal divider">
              //{OR: google login/ facebook login }
            </div>
          </Wrapper>
        )
    }
}*/