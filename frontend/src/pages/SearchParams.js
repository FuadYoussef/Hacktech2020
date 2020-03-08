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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const UpdateComponent = styled.form`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 30vh;
`;

const BaseContainer = styled.form`
  font-size: 1em; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 30vh;
  font: 'Muli', sans-serif;
`;

const ButtonContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 30vh;
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



const SearchProfile = ({ history }) => {
    const handleSearch = useCallback(
        async event => {
            console.log("handleUpdate")
            event.preventDefault();
            const {age, gender, race, religion } = event.target.elements;
            var searchAge = age;
            var searchGender = gender;
            var searchRace = race;
            var searchReligion = religion;
            var returnedUsers = [];
            var rankedUsers = [];
            var leadsRef = app.database().ref('/users');
            leadsRef.on('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childData = childSnapshot.val();
                    //console.log(childSnapshot.val());
                    returnedUsers.push({
                        username: childData.usermame,
                        age: childData.age,
                        gender: childData.gender,
                        race: childData.race,
                        religion: childData.religion
                    });
                });
            });
            for (let i = 0; i < returnedUsers.length; i++){
                console.log("index " + i);
                //console.log(returnedUsers[i]);
                console.log(returnedUsers)
                rankedUsers[i] = {
                    usermame: 'user',
                    score: 0
                };
                if (returnedUsers[i].usermame != null){
                    rankedUsers[i].usermame = returnedUsers[i].usermame;
                    if (returnedUsers[i].age >= searchAge -5 && returnedUsers[i].age <= searchAge -5) {
                        rankedUsers[i].score++;
                    }
                    if (returnedUsers[i].gender === searchGender) {
                        rankedUsers[i].score++;
                    }
                    if (returnedUsers[i].race === searchRace) {
                        rankedUsers[i].score++;
                    }
                    if (returnedUsers[i].religion === searchReligion) {
                        rankedUsers[i].score++;
                    }
                }
                console.log(rankedUsers);



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
            <h1 style={{paddingBottom: '8px' , paddingTop:'2.5em', font: '1.5em'}}> Who Would You Like to Meet? </h1>

            <UpdateComponent onSubmit={handleSearch}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <TextField name="age" label="age" id="outlined-basic" variant="outlined"/>

                    <Select name="gender" options={genders} placeholder="Gender"/>
                </div>

                <div>
                    <Select name="race" options={races} placeholder="Race"/>

                    <Select name = "religion" options={religions}/>

                    <ButtonContainer>
                        <Button variant="contained" color="primary" type="submit">
                            Search
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

export default withRouter(SearchProfile);