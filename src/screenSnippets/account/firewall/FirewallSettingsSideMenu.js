import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import settingsIcon from '../../../assets/icons/firewall/settings.png';
import '../../../assets/css/account/account_side_menu.css';

const FirewallSettingsSideMenu = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="account_sidemenu_div">
          <div class="wrapper">
                <nav id="sidebar" style={styles.dashboard.sidebar}>
                    <div class="sidebar-header">
                        <img src={mode === 'dark' ? settingsIcon : settingsIcon} style={{width:'150px', height:'150px'}} alt="" />
                        <h2 className="mt-2 mx-auto"><strong>Settings</strong></h2>
                    </div>
                    <ul class="list-unstyled components" id="homeSubmenu">
                        <li>
                            <div >
                                <a href="firewall_dashboard" className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gauge mt-1 ms-2" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="12" r="9" />
                                        <circle cx="12" cy="12" r="1" />
                                        <line x1="13.41" y1="10.59" x2="16" y2="8" />
                                        <path d="M7 12a5 5 0 0 1 5 -5" />
                                    </svg>
                                    <h6 className="mt-3">Dashboard</h6>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="firewall_settings" className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plug mt-1 ms-2" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6" />
                                        <line x1="9" y1="3" x2="9" y2="7" />
                                        <line x1="15" y1="3" x2="15" y2="7" />
                                        <path d="M12 16v2a2 2 0 0 0 2 2h3" />
                                    </svg>
                                    <h6 className="mt-3">Sources</h6>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div >
                                <a href="firewall_reports" className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-analytics mt-1 ms-2" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                        <line x1="9" y1="17" x2="9" y2="12" />
                                        <line x1="12" y1="17" x2="12" y2="16" />
                                        <line x1="15" y1="17" x2="15" y2="14" />
                                    </svg>
                                    <h6 className="mt-3">Reports</h6>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div >
                                <a href="firewall_alerts" className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-urgent mt-1 ms-2" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
                                        <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                                        <rect x="6" y="16" width="12" height="4" rx="1" />
                                    </svg>
                                    <h6 className="mt-3">Alerts</h6>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
      </div>
    );
}
  
export default FirewallSettingsSideMenu;
  