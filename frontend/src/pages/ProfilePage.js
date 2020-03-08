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
  background: yellow;
`;

const UpdateComponent = styled.form`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  background: green;
`;


const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 30vh;
`;



const UpdateProfile = ({ history }) => {
  const handleUpdate = useCallback(
    async event => {
      console.log("handleUpdate")
      event.preventDefault();
      const { name, age, gender, race, religion } = event.target.elements;
      console.log('---')
      console.log(event.target.elements)
      console.log(name.value)
      console.log('---')
      try {
        app.database().ref('users/' + firebase.auth().currentUser.uid).set({
        	name: name.value,
        	age: age.value,
        	gender: gender.value,
        	// race: race.value,
        	religion: religion.value
      	});
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

const { currentUser } = useContext(AuthContext);
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

  

  return (
    <Wrapper>
      <h1 style={{paddingBottom: '8px' , paddingTop:'2.5em', font: '1.5em'}}> Update Your Profile </h1>
  
      <UpdateComponent onSubmit={handleUpdate}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <TextField name="name" label="name" id="outlined-basic" variant="outlined"/>
          <TextField style={{width: '75px'}} name="age" label="age" id="outlined-basic" variant="outlined"/>

          <Select name="gender" options={genders} placeholder="Gender"/>
        </div>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ReactMultiSelectCheckboxes name = "race" options={races} />

          <Select name = "religion" options={religions}/>

          <ButtonContainer>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
          </ButtonContainer>
        </div>

        <IconButton color="inherit" onClick={() => history.push('/dashboard')}>
            <ExitToAppIcon/>
          </IconButton>
      </UpdateComponent>
      
    </Wrapper>
  );
};

export default withRouter(UpdateProfile);
