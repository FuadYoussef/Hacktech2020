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

export default class RegisterPage extends Component {
    render() {
        return(
          <Wrapper className="base-container">
            <TextField id="outlined-basic" label="email" variant="outlined"/>
            <TextField id="outlined-basic" label="username" variant="outlined"/>
            <TextField id="outlined-basic" label="password" variant="outlined"/>
            <button type="button" id="btn">Register</button>
          </Wrapper>
        )
    }
}
