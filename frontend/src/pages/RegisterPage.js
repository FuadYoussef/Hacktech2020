import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";

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
