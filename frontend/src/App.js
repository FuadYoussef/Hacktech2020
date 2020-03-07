import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

const HomePage = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hello teammates
            </p>
            <div>
                <Button variant="contained" color="primary">
                  Register
                </Button>

                <Link to="/login" underline="none">
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </Link>
            </div>
        </header>
    </div>
);


export default App;
