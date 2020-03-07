import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import Button from '@material-ui/core/Button';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Welcome(props) {
  return <h1>Hello, user</h1>;
}