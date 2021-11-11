import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import dashboardIcon from '../../../assets/icons/firewall/settings.png';
import '../../../assets/css/account/account_side_menu.css';

const AccountSideMenu = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="account_sidemenu_div">
          <div class="wrapper">
                <nav id="sidebar" style={styles.dashboard.sidebar}>
                    <div class="sidebar-header">
                        <img src={dashboardIcon} style={{width:'150px', height:'150px'}} alt="" />
                        <h3 className="mt-2"><strong>{t(`dashboard.sidebar.dashboard`)}</strong></h3>
                    </div>
                    <ul class="list-unstyled components">
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user mt-2 mx-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    <h5 className="mt-2">{t(`dashboard.sidebar.account`)}</h5>    
                                </div>
                            </a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="account"><small>my account</small></a>
                                </li>
                                <li>
                                    <a href="#"><small>edit account</small></a>
                                </li>
                                <li>
                                    <a href="#"><small>logout</small></a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box mt-2 mx-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                                        <line x1="12" y1="12" x2="20" y2="7.5" />
                                        <line x1="12" y1="12" x2="12" y2="21" />
                                        <line x1="12" y1="12" x2="4" y2="7.5" />
                                    </svg>
                                    <h5 className="mt-2">{t(`dashboard.sidebar.services`)}</h5>   
                                </div>
                            </a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="create_new_host"><small>create new host</small></a>
                                </li>
                                <li>
                                    <a href="firewall_settings"><small>firewall settings</small></a>
                                </li>
                            </ul>   
                        </li>
                        <li>
                            <a href="#">
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help mt-2 mx-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="12" y1="17" x2="12" y2="17.01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    <h5 className="mt-2">{t(`dashboard.sidebar.support`)}</h5>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
      </div>
    );
}
  
export default AccountSideMenu;
  