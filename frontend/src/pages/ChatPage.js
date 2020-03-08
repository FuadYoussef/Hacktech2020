import React, { Component } from 'react';
import Form from './Form.js';
import "firebase/auth";
import "firebase/database";
import app from "../base.js";

class ChatPage extends Component {
  constructor(props) {
    super(props);


    this.state = {
      displayName: 'leesin',
      targetUserName: this.props.location.state.detail.replace(':', ''),
    }
  }


  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.state.detail !== this.props.location.state.detail) {
        this.setState({targetUserName: this.props.location.state.detail.replace(':', '')})
    }
  }


  render() {
    return (
      <div className="app">
        <div className="app__list">
          <Form userName={this.state.displayName} targetUserName={this.state.targetUserName}/>
        </div>
      </div>
    );
  }
}
export default ChatPage;