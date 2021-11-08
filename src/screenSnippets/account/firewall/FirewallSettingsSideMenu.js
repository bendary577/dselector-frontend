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
                            <a href="firewall_dashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="firewall_settings">Sources</a>
                        </li>
                        <li>
                            <a href="firewall_reports">Reports</a>
                        </li>
                        <li>
                            <a href="firewall_alerts">Alerts</a>
                        </li>
                    </ul>
                </nav>
            </div>
      </div>
    );
}
  
export default FirewallSettingsSideMenu;
  