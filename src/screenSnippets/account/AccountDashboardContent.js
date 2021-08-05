import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import AccountTopNavbar from '../../screenSnippets/account/AccountTopNavbar';
import RegisteredHostsCard from '../../components/cards/RegisteredHostsCard';
import SearchBar from '../../components/inputs/SearchBar';
import HostingServicesTable from './HostingServicesTable';

const AccountDashboardContent = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
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
                <SearchBar placeholder={t(`home.welcome.domain`)} width="80%" id="" name="" value=""/>
            </div>

            {/* ------------------------------------ hostnames table ----------------------- */}

            <div className="search_bar mx-4 text-center my-4">
                <HostingServicesTable />
            </div>

      </div>
    );
}
  
export default AccountDashboardContent;
  