import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import AccountNavbar from '../../screenSnippets/account/AccountNavbar';
import MinorFooter from '../../screenSnippets/account/MinorFooter';
import AccountSideMenu from '../../screenSnippets/account/AccountSideMenu';
import AccountDashboardContent from '../../screenSnippets/account/AccountDashboardContent';
import CreateNewHost from '../../screenSnippets/account/CreateNewHost';

const AccountDashboard = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="account_dashboard_div">
          <AccountNavbar />
          <div className="d-flex">
              <AccountSideMenu />
              <div className="dashboard_content w-100">
                  {/* <AccountDashboardContent /> */}
                  <CreateNewHost />
              </div>
          </div>
          <MinorFooter />
      </div>
    );
}
  
export default AccountDashboard;
  