import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import dashboardIcon from '../../../assets/icons/account/dashboard.png';

const FirewallTopNavbar = () => {

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
                    <nav class="navbar navbar-expand-lg w-100" style={styles.home.account_top_navbar}>
                      <button type="button" id="sidebarCollapse" className="btn"  style={styles.buttons.toggle_button} onClick={toggleSideMenu}> 
                        <img src={dashboardIcon} style={{width:'20px', height:'20px'}} alt="" />
                        <span className="me-2">{t(`dashboard.top_navbar.toggle`)}</span>
                      </button>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item mx-2">
                              <a class="nav-link" className="d-flex" href="#">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point mt-1 ms-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
                                    <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
                                    <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
                                    <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
                                  </svg>
                                  <h6 className="mt-2">Bandwidth</h6>
                              </a>
                            </li>
                            <li class="nav-item mx-2">
                              <a class="nav-link" className="d-flex" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity mt-1 ms-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M3 12h4l3 8l4 -16l3 8h4" />
                                </svg>
                                <h6 className="mt-2">Productivity</h6>
                              </a>
                            </li>
                            <li class="nav-item mx-2">
                              <a class="nav-link" className="d-flex" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame mt-1 ms-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={ mode === "dark" ? "#ffffff" : "#000000" } fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                                </svg>
                                <h6 className="mt-2">Firewall</h6>
                              </a>
                            </li>
                        </ul>
                    </div>
                  </nav>
                </div>
              </div>
    );
}
  
export default FirewallTopNavbar;
  