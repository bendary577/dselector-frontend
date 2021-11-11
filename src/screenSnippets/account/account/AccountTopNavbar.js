import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import dashboardIcon from '../../../assets/icons/account/dashboard.png';
import '../../../assets/css/account/navbar_links.css';

const AccountTopNavbar = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


  const toggleSideMenu = () => {
    let sideMenu = document.getElementById('sidebar');
    let classAttribute = sideMenu.getAttribute("class");
    if(classAttribute){
      classAttribute.includes("active") ? sideMenu.setAttribute("class", "") : sideMenu.setAttribute("class", "active");
    }else{
      sideMenu.setAttribute("class", "active")
    }
  }

    return (
                <div className="account_sidemenu_div my-4 mx-4">
                  <div id="content"> 
                    <nav class="navbar navbar-expand-lg w-100 h-100" style={styles.home.account_top_navbar}>
                      <button type="button" id="sidebarCollapse" className="btn"  style={styles.buttons.toggle_button} onClick={toggleSideMenu}> 
                        <img src={dashboardIcon} style={{width:'20px', height:'20px'}} alt="" />
                        <span className="me-2">{t(`dashboard.top_navbar.toggle`)}</span>
                      </button>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav h-100">
                            <li class="nav-item mx-3 top_navbar_link h-100">
                              <a class="nav-link" className="d-flex" href="#">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-analytics ms-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="3" y="4" width="18" height="12" rx="1" />
                                    <line x1="7" y1="20" x2="17" y2="20" />
                                    <line x1="9" y1="16" x2="9" y2="20" />
                                    <line x1="15" y1="16" x2="15" y2="20" />
                                    <path d="M8 12l3 -3l2 2l3 -3" />
                                  </svg>
                                  <h6 className="mt-2">Usage</h6>
                              </a>
                            </li>
                            <li class="nav-item mx-3 top_navbar_link h-100">
                              <a class="nav-link" className="d-flex" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-line ms-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <line x1="4" y1="19" x2="20" y2="19" />
                                  <polyline points="4 15 8 9 12 11 16 6 20 10" />
                                </svg>
                                <h6 className="mt-2">Statistics</h6>
                              </a>
                            </li>
                            <li class="nav-item mx-3 top_navbar_link h-100">
                              <a class="nav-link" className="d-flex" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tabler ms-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M8 9l3 3l-3 3" />
                                  <line x1="13" y1="15" x2="16" y2="15" />
                                  <rect x="4" y="4" width="16" height="16" rx="4" />
                                </svg>
                                <h6 className="mt-2">dashboard</h6>
                              </a>
                            </li>
                        </ul>
                    </div>
                  </nav>
                </div>
              </div>
    );
}
  
export default AccountTopNavbar;
  