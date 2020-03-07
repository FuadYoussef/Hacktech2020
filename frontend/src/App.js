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


function App() {
  return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>

  );
}

const Home = () => (
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

const Login = () => (
    <div>
        <h1>Login</h1>
    </div>
);

export default App;
