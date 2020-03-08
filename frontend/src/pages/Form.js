import React, { Component } from 'react';
import './Form.css';
import Message from './Message';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import app from "../base.js";
import Button from "@material-ui/core/Button";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName,
      targetUserName: props.targetUserName,
      message: '',
      list: [],
      messageRef: null,
      authenticated: false,
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // var conID = app.auth().currentUser.uid;
        /* We need to make sure to update this whenever we clink on a new link */
        let conID = letterFrequency(this.state.userName, this.state.targetUserName)
        this.setState({
          messageRef : app.database().ref().child('conversations/'+conID+'/messages'),
          authenticated : true,
        })
        this.listenMessages();
      } else {
        console.log("failure");
      }
  });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.targetUserName !== this.props.targetUserName) {
        this.state.targetUserName = this.props.targetUserName;
        /* We need to make sure to update this whenever we clink on a new link */
        let conID = letterFrequency(this.state.userName, this.state.targetUserName)
        this.setState({
          messageRef: app.database().ref().child('conversations/' + conID + '/messages'),
          list: []
        })

        this.listenMessages()
      }
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSend() {
    if (this.state.authenticated && this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      this.state.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }

  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }

  listenMessages() {
    this.state.messageRef
      .limitToLast(5)
      .on('value', message => {
        if (message.exists()) {
          this.setState({
            list: Object.values(message.exportVal()),
          });
        }
      })
  }

  render() {
    return (
      <div className="form" style={{background: 'transparent', width: '100%', marginRight: '16px'}}>
        <div style={{width: '70vw'}} className="form__message">
          { this.state.list.map((item, index) =>
            <Message key={index} message={item} />
          )}
        </div>
        <div style={{width: '75vw'}}className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        </div>

        <Button
          style={{width: '10%', marginLeft: '30px', marginTop: '-8px'}}
          className="form__button"
          onClick={this.handleSend.bind(this)}
        >
          Send
        </Button>
      </div>
    );
  }
}

/* HACKY code to normalize our conversation id */
function letterFrequency(text1, text2){
  let text = text1 + text2
  text.replace(/[\W_]+/g," ");
  var count = {};
  var ch = 'a'
  for (let i = 0; i < 26; i++) {
    count[ch] = 0
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
  }

  text.split('').forEach(function(s) {
    count[s] = count[s]+1;
  });

  let res = ''
  ch = 'a'
  for (let i = 0; i < 26; i++) {
    let occ = count[ch]
    res += ch + occ
    if (i < 25)
      res += '+'
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
  }
  return res
}