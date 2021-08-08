import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import AccountNavbar from '../../screenSnippets/account/AccountNavbar';
import MinorFooter from '../../screenSnippets/account/MinorFooter';
import AccountSideMenu from '../../screenSnippets/account/AccountSideMenu';
import AccountTopNavbar from '../../screenSnippets/account/AccountTopNavbar';
import RegisteredHostsCard from '../../components/cards/RegisteredHostsCard';
import SearchBar from '../../components/inputs/SearchBar';
import HostingServicesTable from '../../screenSnippets/account/HostingServicesTable';

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
                <div className="account_dashbaord_content_div w-100">
                  <AccountTopNavbar />
                  {/* ----------------------------------- hostnames cards ------------------------ */}
                  <div className="hostnames_cards">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-6 col-sm-12">
                                  <RegisteredHostsCard /> 
                              </div>
                              <div className="col-md-6 col-sm-12">
                                  <RegisteredHostsCard /> 
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* ----------------------------------- search bar ----------------------------- */}

                  <div className="search_bar mx-4 text-center w-100">
                      <SearchBar placeholder={t(`dashboard.content.search`)} width="80%" id="" name="" value=""/>
                  </div>

                  {/* ------------------------------------ hostnames table ----------------------- */}

                  <div className="search_bar mx-4 text-center my-4">
                      <HostingServicesTable />
                  </div>

                      </div>
                  </div>
                </div>
          <MinorFooter />
      </div>
    );
}
  
export default AccountDashboard;
  