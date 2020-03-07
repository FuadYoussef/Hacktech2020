import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  width: 15%;
`;

export default class LoginPage extends Component {
    render() {
        return(
          <Wrapper>
            <TextField id="outlined-basic" label="email" variant="outlined"/>
            <TextField id="outlined-basic" label="password" variant="outlined"/>
          </Wrapper>
        )
    }
}
