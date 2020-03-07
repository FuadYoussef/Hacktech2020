import React, { Component, useCallback, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import SuccessPage from './SuccessPage';

/* Wrapper is used to position LoginComponent right in the center
*  NOTE: min-height: 100vh ensure the div is the same height as the screen
*/
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const LoginComponent = styled.form`
  padding: 32px;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  height: 25vh;
  width: 100%;
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

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        console.log("works")
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/SuccessPage" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);

/*
>>>>>>> 34e498cdb61cbd57cc43f0b7bc327952727e2215
export default class LoginPage extends Component {
    render() {
        return(
          <Wrapper>
<<<<<<< HEAD
            <LoginComponent>
              <TextField id="outlined-basic" label="email" variant="outlined"/>
              <TextField id="outlined-basic" label="password" variant="outlined"/>

              <Link to="/" underline="none">
                <LoginButton>
                  Login
                </LoginButton>
              </Link>
              <a href="./">Forgot your password?</a>

              <div class="horizontal divider">
                {/* OR: google login/ facebook login */}
//               </div>
//             </LoginComponent>
// =======
//             <TextField id="outlined-basic" label="email" variant="outlined"/>
//             <TextField id="outlined-basic" label="password" variant="outlined"/>
//             <Button as="a" href="/">Login</Button>
//             <a href="./">Forgot your password?</a>
//             <div class="horizontal divider">
//               //{OR: google login/ facebook login }
//             </div>
// >>>>>>> 34e498cdb61cbd57cc43f0b7bc327952727e2215
//           </Wrapper>
//         )
//     }
// }*/