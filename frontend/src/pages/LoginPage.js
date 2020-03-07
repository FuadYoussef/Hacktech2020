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
  height: 25vh;
`;


export default class LoginPage extends Component {
    render() {
        return(
          <Wrapper>
            <LoginComponent>
              <TextField id="outlined-basic" label="email" variant="outlined"/>
              <TextField id="outlined-basic" label="password" variant="outlined"/>

              <Link to="/" underline="none">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>
            </LoginComponent>
          </Wrapper>
        )
    }
}
