import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';

const AccountTopNavbar = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


  const toggleSideMenu = () => {
    console.log("%%%%%%%%%%%%%%% toggle");
    let sideMenu = document.getElementById('sidebar');
    let classAttribute = sideMenu.getAttribute("class");
    if(classAttribute){
      classAttribute.includes("active") ? sideMenu.setAttribute("class", "") : sideMenu.setAttribute("class", "active");
    }else{
      sideMenu.setAttribute("class", "active")
    }
  }

    return (
      <div className="account_sidemenu_div">
          <div id="content"> 
            <nav class="navbar navbar-expand-lg w-100">
                <div class="container">
                    <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={toggleSideMenu}> 
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                </div>
            </nav>
        </div>
      </div>
    );
}
  
export default AccountTopNavbar;
  