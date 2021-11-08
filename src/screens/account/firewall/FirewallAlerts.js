import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import AccountTopNavbar from '../../../screenSnippets/account/account/AccountTopNavbar';
import alertIcon from '../../../assets/icons/firewall/alert.png';
import MinorFooter from '../../../screenSnippets/account/account/MinorFooter';
import FirewallSettingsSideMenu from '../../../screenSnippets/account/firewall/FirewallSettingsSideMenu';
import AccountNavbar from '../../../screenSnippets/account/account/AccountNavbar';
import FirewallSourceCard from '../../../components/cards/FirewallSourceCard';

const FirewallAlerts = () => {

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
                    {/* ----------------------------------- hostnames cards ------------------------ */}
                    <div className="create_host_title mx-4">
                        <div className="d-flex mx-4">
                            <img src={alertIcon} style={{width:'50px', height:'50px'}} className="mt-2 " alt="" />
                            <h2 className="me-2 mt-3"><strong>firewall alerts</strong></h2>
                        </div>

                        <div className="mt-3">
                            <p>dselector Reporter for FortiGate can alert you to specific network conditions when they occur. Click Add Alert to get started, or click the Settings button an any existing alert below.</p>
                        </div>
                    </div>

                    <div className="container my-5">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="alert_title">
                                            <div className="threat_title">
                                                <h4 className=""><strong>Threat Detected</strong></h4>
                                            </div>
                                            <div className="">
                                                <span class="badge badge-danger">Danger</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="alert_action">
                                            <button type="button" class="btn btn-success">on</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="alert_action">
                                            <button type="button" class="btn btn-danger">cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="alert_title">
                                            <div className="threat_title">
                                                <h4 className=""><strong>Downloads more than 100 MB</strong></h4>
                                            </div>
                                            <div className="">
                                                <span class="badge badge-warning">Medium</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="alert_action">
                                            <button type="button" class="btn btn-success">on</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="alert_action">
                                            <button type="button" class="btn btn-danger">cancel</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    

                </div>
            </div>  
            <MinorFooter />
        </div>
    );
}
  
export default FirewallAlerts;
  