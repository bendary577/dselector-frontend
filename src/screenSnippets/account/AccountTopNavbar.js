import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import dashboardIcon from '../../assets/icons/account/dashboard.png';

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
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={toggleSideMenu}> 
                        <img src={dashboardIcon} style={{width:'20px', height:'20px'}} alt="" />
                        <span className="me-2">Toggle Sidebar</span>
                    </button>
                </div>
            </nav>
        </div>
      </div>
    );
}
  
export default AccountTopNavbar;
  