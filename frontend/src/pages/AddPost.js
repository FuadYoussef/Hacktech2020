import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

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
    const classes = useStyles();
    return (
        <Wrapper>
            <BaseContainer>
                <TextField name="title" label="title" id="outlined-basic" variant="outlined"/>
                <TextField name="subjct" label="subject" id="outlined-basic" variant="outlined"/>
                <label for="story">Tell us your story:</label>
                <textarea id="story" name="story"
                        rows="10" cols="60">
                </textarea>

                {/* <Button variant="contained" color="primary" type="submit">Speak Up</Button> */}
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                    </div>
            </BaseContainer>
        </Wrapper>
    )
}
