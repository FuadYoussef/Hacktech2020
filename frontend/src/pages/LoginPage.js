import React, { Component } from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField'
import Link from "@material-ui/core/Link";
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
  height: 25vh;
  width: 100%;
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

export default class LoginPage extends Component {
    render() {
        return(
          <Wrapper>
            <LoginComponent>
              <TextField id="outlined-basic" label="email" variant="outlined"/>
              <TextField id="outlined-basic" label="password" variant="outlined"/>

              <Link to="/" underline="none">
                <LoginButton>
                  Login
                </LoginButton>
              </Link>
              <a href="./">Forgot your password?</a>

              <div class="horizontal divider">
                {/* OR: google login/ facebook login */}
              </div>
            </LoginComponent>
          </Wrapper>
        )
    }
}
