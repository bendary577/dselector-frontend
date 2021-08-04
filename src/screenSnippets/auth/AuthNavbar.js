import React, {useContext} from 'react';
import dSelectorLogo from '../../assets/icons/navbar/dselector-logo.png';
import LanguageSwitcher from '../../components/buttons/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import ThemeSwitcher from '../../components/buttons/ThemeSwitcher';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import '../../assets/css/account/account_navbar.css';
import dSelectorLogoWhite from '../../assets/icons/navbar/dselector-logo-white.png';

const AuthNavbar = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="account_navbar_div">
        <nav class="navbar navbar-expand-lg" style={styles.navbar}>
          <a class="navbar-brand mt-2 mt-lg-0 d-flex" href="/">
            <img src={mode === "dark" ? dSelectorLogoWhite : dSelectorLogo } style={{width:'220px', height:'120px'}} className="" alt="dselector" />
          </a>  
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
            <div class="">
                  <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    );
}
  
export default AuthNavbar;
  