import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import AccountTopNavbar from '../../../screenSnippets/account/account/AccountTopNavbar';
import dashboardIcon from '../../../assets/icons/firewall/dashboard.png';
import MinorFooter from '../../../screenSnippets/account/account/MinorFooter';
import FirewallSettingsSideMenu from '../../../screenSnippets/account/firewall/FirewallSettingsSideMenu';
import AccountNavbar from '../../../screenSnippets/account/account/AccountNavbar';

const FirewallDashboard = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
        <div className="account_dashboard_div">
            <AccountNavbar />
            <div className="d-flex">
                <FirewallSettingsSideMenu />
                <div className="account_dashbaord_content_div w-100" style={styles.dashboard.create_new_host}>
                    <AccountTopNavbar />

                    {/* ------------------------------- hostnames cards ------------------------ */}
                    <div className="create_host_title mx-4">
                        <div className="d-flex mx-4">
                            <img src={dashboardIcon} style={{width:'70px', height:'70px'}} alt="" />
                            <h2 className="me-2 mt-3"><strong>Firewall Dashboard</strong></h2>
                        </div>
                    </div>

                    <div className="chart_debian">
                        <div className="dashboard">

                        </div>
                    </div>
                </div>
            </div>  
            <MinorFooter />
        </div>
    );
}
  
export default FirewallDashboard;
  