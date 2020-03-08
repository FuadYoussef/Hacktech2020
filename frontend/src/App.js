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
import RegisterPage from './pages/RegisterPage'
import {AuthProvider} from "./Auth"
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage"
import SearchPage from "./pages/SearchParams"
import NewLoginPage from "./pages/NewLoginPage.js"
import CreateProfile from "./pages/CreateProfile.js"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NewLoginPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/dashboard" component={DashboardPage}/>
          <Route path="/profile" component = {ProfilePage}/>
          <Route path="/search" component = {SearchPage}/>
          {/* <Route path="/newlogin" component = {NewLoginPage}/> */}
          <Route path="/createprofile" component = {CreateProfile}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

// const HomePage = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo"/>
//       <p>
//         Hello teammates
//       </p>
//       <div>
//         <Link to="/register" underline="none">
//           <Button variant="contained" color="primary">
//             Register
//           </Button>
//         </Link>

//         <Link to="/login" underline="none">
//           <Button variant="contained" color="primary">
//             Login
//           </Button>
//         </Link>
//         <Link to="/loginandregister" underline="none">
//           <Button variant="contained" color="primary">
//             Both
//           </Button>
//         </Link>
//       </div>
//     </header>
//   </div>
// );


export default App;