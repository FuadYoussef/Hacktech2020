import React, { Component } from 'react';
import Form from './Form.js';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import app from "../base.js";

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: props.match.params.userName.replace(':', '')
    }
  }
  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  
  render() {
    console.log(this.state.displayName)
    return (
      <div className="app">
        <div className="app__list">
          <Form userName={this.state.displayName}/>
        </div>
      </div>
    );
  }
}
export default ChatPage;