import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";

const BaseContainer = styled.form`
  font-size: 1.5em; 
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 60vh;
  font: 'Muli', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function AddPost() {
    return (
        <Wrapper>
            <BaseContainer>
                <TextField name="title" label="title" id="outlined-basic" variant="outlined"/>
                <TextField name="subjct" label="subject" id="outlined-basic" variant="outlined"/>
                <label for="story">Tell us your story:</label>
                <textarea id="story" name="story"
                        rows="10" cols="60">
                </textarea>

                <Button variant="contained" color="primary" type="submit">Speak Up</Button>
            </BaseContainer>
        </Wrapper>
    )
}
