import React, { useContext } from "react";
import './App.css';
import Home from '../src/screens/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './context/theme/ThemeProvider';
import { themeStyles } from "./styles/theme/ThemeStyle";
import AccountDashboard from "./screens/account/AccountDashboard";
import SignUp from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";

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

              <Route exact path="/signup">
                  <SignUp />
              </Route>

              <Route exact path="/signin">
                  <SignIn />
              </Route>

          </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
