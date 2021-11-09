import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import FirewallTopNavbar from '../../../screenSnippets/account/firewall/FirewallTopNavbar';
import MinorFooter from '../../../screenSnippets/account/account/MinorFooter';
import FirewallSettingsSideMenu from '../../../screenSnippets/account/firewall/FirewallSettingsSideMenu';
import AccountNavbar from '../../../screenSnippets/account/account/AccountNavbar';
import FirewallBandwidthCard from '../../../components/cards/firewall/FirewallBandwidthCard';
import FirewallProductivityCard from '../../../components/cards/firewall/FirewallProductivityCard';
import FirewallActionsCard from '../../../components/cards/firewall/FirewallActionsCard';
import dashboardIcon from '../../../assets/icons/firewall/dashboard.png';
import bandwidthIcon from '../../../assets/icons/firewall/bandwidth.png';
import productivityIcon from '../../../assets/icons/firewall/productivity.png';
import firewallActionsIcon from '../../../assets/icons/firewall/firewall_actions.png';

const FirewallDashboard = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
        <div className="firewall_dashboard_div">
            <AccountNavbar />
            <div className="d-flex">
                <FirewallSettingsSideMenu />
                <div className="account_dashbaord_content_div w-100" style={styles.dashboard.create_new_host}>
                    <FirewallTopNavbar />

                    {/* ------------------------------- hostnames cards ------------------------ */}
                    <div className="create_host_title mx-4">
                        <div className="d-flex mx-4">
                            <img src={dashboardIcon} style={{width:'70px', height:'70px'}} alt="" />
                            <h2 className="me-2 mt-3"><strong>Firewall Dashboard</strong></h2>
                        </div>
                    </div>

                    <hr className="mx-5"/>

                    <div className="container mt-4">
                        {/* ------------------------ bandwidth ---------------------------------- */}
                        <div className="d-flex mx-4">
                            <img src={bandwidthIcon} style={{width:'50px', height:'50px'}} alt="" />
                            <h4 className="me-2 mt-3">Bandwidth</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <FirewallBandwidthCard />
                            </div>
                            <div className="col-md-6">
                                <FirewallBandwidthCard />
                            </div>
                        </div>

                        {/* ------------------------ productivity ---------------------------------- */}
                        <div className="d-flex mx-4 mt-3">
                            <img src={productivityIcon} style={{width:'50px', height:'50px'}} alt="" />
                            <h4 className="me-2 mt-3">Productivity</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <FirewallProductivityCard />
                            </div>
                            <div className="col-md-6">
                                <FirewallProductivityCard />
                            </div>
                        </div>

                        {/* ------------------------ actions ---------------------------------- */}
                        <div className="d-flex mx-4 mt-3 mb-3">
                            <img src={firewallActionsIcon} style={{width:'50px', height:'50px'}} alt="" />
                            <h4 className="me-2 mt-3">Firewall Actions</h4>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <FirewallActionsCard />
                            </div>
                            <div className="col-md-6">
                                <FirewallActionsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <MinorFooter />
        </div>
    );
}
  
export default FirewallDashboard;
  