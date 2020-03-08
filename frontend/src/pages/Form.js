import React, { Component } from 'react';
import './Form.css';
import Message from './Message';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import app from "../base.js";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName,
      message: '',
      list: [],
      messageRef: null,
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var conID = app.auth().currentUser.uid;
        console.log(conID)
        this.state.messageRef = app.database().ref().child('conversations/'+conID+'/messages');
        console.log('before')
        console.log(this.state.messageRef)
        this.listenMessages();
      } else {
        console.log("failure");
      }
  });
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.user) {
  //     console.log(nextProps.user.displayName)
  //     this.setState({userName: nextProps.user.displayName});
  //   }
  // }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      console.log(newItem)
      this.state.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }
  listenMessages() {
    console.log('***')
    console.log(this.state.messageRef)
    this.state.messageRef
      .limitToLast(10)
      .on('value', message => {
          this.setState({
            list: Object.values(message.exportVal()),
          });
      });
  }
  render() {
    return (
      <div className="form">
        <div className="form__message">
          { this.state.list.map((item, index) =>
            <Message key={index} message={item} />
          )}
        </div>
        <div className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button
            className="form__button"
            onClick={this.handleSend.bind(this)}
          >
            send
          </button>
        </div>
      </div>
    );
  }
}