import React, { useContext } from "react";
import './App.css';
import Home from '../src/screens/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './context/theme/ThemeProvider';
import { themeStyles } from "./styles/theme/ThemeStyle";
import AccountDashboard from "./screens/account/AccountDashboard";
import SignUp from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";
import ForgotPassword from "./screens/auth/ForgotPassword";
import ConfirmResetPasswordCode from "./screens/auth/ConfirmResetPasswordCode";
import ResetPassword from "./screens/auth/ResetPassword";
import CreateNewHost from "./screens/account/CreateNewHost";

const App = () => {

  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode);

  return (
      <div style={styles.app}>
      <BrowserRouter>
          <Switch>
              <Route exact path={["/", "/home"]}>
                  <Home />
              </Route>

              <Route exact path="/account">
                  <AccountDashboard />
              </Route>

              <Route exact path="/create_new_host">
                  <CreateNewHost />
              </Route>

              <Route exact path="/signup">
                  <SignUp />
              </Route>

              <Route exact path="/login">
                  <SignIn />
              </Route>

              <Route exact path="/forgot_password">
                  <ForgotPassword />
              </Route>

              <Route exact path="/confirm_code">
                  <ConfirmResetPasswordCode />
              </Route>

              <Route exact path="/reset_password">
                  <ResetPassword />
              </Route>

          </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
