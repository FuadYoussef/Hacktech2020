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
      user: null,
    }
  }
  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  
  render() {
    return (
      <div className="app">
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default ChatPage;