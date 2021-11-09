import React, { useContext } from "react";
import './App.css';
import Home from '../src/screens/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './context/theme/ThemeProvider';
import { themeStyles } from "./styles/theme/ThemeStyle";
import AccountDashboard from "./screens/account/account/AccountDashboard";
import SignUp from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";
import ForgotPassword from "./screens/auth/ForgotPassword";
import ConfirmResetPasswordCode from "./screens/auth/ConfirmResetPasswordCode";
import ResetPassword from "./screens/auth/ResetPassword";
import CreateNewHost from "./screens/account/dynamicDNS/CreateNewHost";
import FirewallSources from "./screens/account/firewall/FirewallSources";
import FirewallAlerts from "./screens/account/firewall/FirewallAlerts";
import FirewallDashboard from "./screens/account/firewall/FirewallDashboard";
import FirewallReports from "./screens/account/firewall/FirewallReports";

const App = () => {

  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode);

  return (
      <div style={styles.app}>
      <BrowserRouter>
          <Switch>

              {/* ------------------------------------------- home ---------------------------- */}
              <Route exact path={["/", "/home"]}>
                  <Home />
              </Route>

               {/* ------------------------------------------- auth ---------------------------- */}
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

              {/* ------------------------------------------- account ---------------------------- */}
              <Route exact path="/account">
                  <AccountDashboard />
              </Route>


              {/* ------------------------------------------- dynamicDNS ---------------------------- */}

              <Route exact path="/create_new_host">
                  <CreateNewHost />
              </Route>

              {/* ------------------------------------------- firewall ---------------------------- */}

              <Route exact path="/firewall_settings">
                  <FirewallSources />
              </Route>

              <Route exact path="/firewall_alerts">
                  <FirewallAlerts />
              </Route>

              <Route exact path="/firewall_dashboard">
                  <FirewallDashboard />
              </Route>

              <Route exact path="/firewall_reports">
                  <FirewallReports />
              </Route>


          </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
