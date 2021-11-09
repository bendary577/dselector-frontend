import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import FirewallTopNavbar from '../../../screenSnippets/account/firewall/FirewallTopNavbar';
import reportIcon from '../../../assets/icons/firewall/reports.png';
import MinorFooter from '../../../screenSnippets/account/account/MinorFooter';
import FirewallSettingsSideMenu from '../../../screenSnippets/account/firewall/FirewallSettingsSideMenu';
import AccountNavbar from '../../../screenSnippets/account/account/AccountNavbar';

const FirewallReports = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
        <div className="account_dashboard_div">
            <AccountNavbar />
            <div className="d-flex">
                <FirewallSettingsSideMenu />
                <div className="account_dashbaord_content_div w-100" style={styles.dashboard.create_new_host}>
                    <FirewallTopNavbar />
                    {/* ----------------------------------- hostnames cards ------------------------ */}
                    <div className="create_host_title mx-4">
                        <div className="d-flex mx-4">
                            <img src={reportIcon} style={{width:'50px', height:'50px'}} className="mt-2 " alt="" />
                            <h2 className="me-2 mt-3"><strong>Firewall Reports</strong></h2>
                        </div>
                    </div>
                    <div className="container my-5 mx-5">
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn" style={styles.buttons.secondary_button}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-aperture mx-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" />
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
                                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
                                    </svg>
                                    Overview Reports
                                </button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn" style={styles.buttons.secondary_button}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-radioactive mx-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6" />
                                        <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0" />
                                        <path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6" />
                                    </svg>
                                    Activity Reports
                                </button>
                            </div>
                            <div className="col-md-4 d-flex">
                                <button className="btn" style={styles.buttons.secondary_button}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                                    </svg>
                                    Existing reports
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*
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
                    */}
                </div>
            </div>  
            <MinorFooter />
        </div>
    );
}
  
export default FirewallReports;
  