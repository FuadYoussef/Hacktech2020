import React, { Component, useCallback, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Select from "react-dropdown-select";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background-image: url(https://i.imgur.com/OFDbIno.png);
  background-size: 60%;
  background-position: initial;
  background-repeat: no-repeat;
`;

const UpdateComponent = styled.form`
  padding: 32px;
  display: block;
  align-items: center; 
  text-align: center;
`;


const ButtonContainer = styled.div`
  align-items: center; 
`;

const Row = styled.div`
  display: block;
`

const UpdateProfile = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password, name, username, age, gender, race, religion } = event.target.elements;
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            // history.push("/");

            // event.preventDefault();
            // const { email, name, username, age, gender, race, religion } = event.target.elements;

            app.database().ref('users/' + firebase.auth().currentUser.uid).set({
                email: email.value, 
                name: name.value,
                username: username.value,
                age: age.value,
                gender: gender.value,
                race: race.value,
                religion: religion.value
            });
        } catch (error) {
          alert(error);
        }        
    }, [history]);

  const { currentUser } = useContext(AuthContext);

  return (
    <Wrapper>
      <div className="reg">
      <h1 style={{paddingBottom: '8px' , paddingTop:'2.5em', font: '1.5em'}}> Create Your Profile </h1>
  
      <UpdateComponent onSubmit={handleSignUp}>
          <TextField className="input-text" style={{width: '300px'}} id="outlined-basic" name="email" label="email"  variant="outlined"/>
          <TextField className="input-text" style={{width: '300px'}} id="outlined-basic" name="password" label="password"  variant="outlined"/>
          <TextField className="input-text" style={{paddingTop:"15px", width: '280px'}} name="name" label="name" id="outlined-basic" variant="outlined"/>
          <TextField className="input-text" style={{paddingTop:"15px", width: '230px'}} name="username" label="username" id="outlined-basic" variant="outlined"/>
          <TextField className="input-text" style={{paddingTop:"15px", width: '75px'}} name="age" label="age" id="outlined-basic" variant="outlined"/>
          <Select className="select" name="gender" options={genders} placeholder="Gender"/>

          <Select className="select" name="race" options={races} placeholder="Race"/>
          <Select className="select" name = "religion" options={religions} placeholder="Religion"/>

        <ButtonContainer>
          <Button className="btn" variant="contained" color="primary" type="submit">
            Register
          </Button>
        </ButtonContainer>

        <IconButton color="inherit" onClick={() => history.push('/dashboard')}>
            <ExitToAppIcon/>
        </IconButton>
      </UpdateComponent>
      </div>
    </Wrapper>
  );
};

const religions = [
  { value: 'Protestant', label: 'Protestant' },
  { value: 'Catholic', label: 'Catholic' },
  { value: 'Muslim', label: 'Muslim' },
  { value: 'Buddhist', label: 'Buddhist' },
  { value: 'Hindu', label: 'Muslim' },
  { value: 'Jewish', label: 'Jewish' },
  { value: 'Daoist', label: 'Daoist' },
  { value: 'Agnostic', label: 'Athiest' },
  { value: 'Other', label: 'Other' },
  { value: 'Prefer not to Say', label: 'Prefer not to Say' }
]
const genders = [
  { value: 'Cis-Male', label: 'Cis-Male' },
  { value: 'Cis-Female', label: 'Cis-Female' },
  { value: 'Non-binary', label: 'Non-binary' },
  { value: 'Trans Male', label: 'Trans Male' },
  { value: 'Trans Female', label: 'Trans Female' },
  { value: 'Other', label: 'Other' },
  { value: 'Prefer not to Say', label: 'Prefer not to Say' }
]
const races = [
  { value: 'Western European', label: 'Western European' },
  { value: 'Eastern European', label: 'Eastern European' },
  { value: 'Other White', label: 'Other White' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Korean', label: 'Korean' },
  { value: 'South Asian', label: 'South Asian' },
  { value: 'Other Asian', label: 'Other Asian' },
  { value: 'Arab', label: 'Arab' },
  { value: 'Turkic', label: 'Turkic' },
  { value: 'Persian', label: 'Other Asian' },
  { value: 'Other Middle Eastern', label: 'Other Middle Eastern' },
  { value: 'Hispanic', label: 'Hispanic' },
  { value: 'Non-Hispanic Latino', label: 'Non-Hispanic Latino' },
  { value: 'Sub-Saharan African', label: 'Sub-Saharan African' },
  { value: 'African-American', label: 'African-American' },
  { value: 'Other Black', label: 'Other Black' },
  { value: 'Amerindian', label: 'Amerindian' },
  { value: 'Prefer not to Say', label: 'Prefer not to Say' }
]

export default withRouter(UpdateProfile);
