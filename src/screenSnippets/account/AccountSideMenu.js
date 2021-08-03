import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import '../../assets/css/account/account_side_menu.css';
import dashboardIcon from '../../assets/icons/dashoard/dashboard.png';
import servicesIcon from '../../assets/icons/dashoard/services.png';
import supportIcon from '../../assets/icons/dashoard/support.png';
import accountIcon from '../../assets/icons/dashoard/account.png';

const AccountSideMenu = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="account_sidemenu_div">
          <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <img src={dashboardIcon} style={{width:'150px', height:'150px'}} alt="" />
                        <h3 className="mt-2"><strong>Dashboard</strong></h3>
                    </div>
                    <ul class="list-unstyled components">
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="d-flex">
                                    <img src={accountIcon} style={{width:'60px', height:'60px'}} alt="" />
                                    <h4 className="mt-3">Account</h4>    
                                </div>
                            </a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <div className="d-flex">
                                    <img src={supportIcon} style={{width:'60px', height:'60px'}} alt="" />
                                    <h4 className="mt-3 me-2">Support</h4>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <div className="d-flex">
                                    <img src={servicesIcon} style={{width:'60px', height:'60px'}} alt="" />
                                    <h4 className="mt-3 me-2">Services</h4>   
                                </div>
                            </a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
      </div>
    );
}
  
export default AccountSideMenu;
  