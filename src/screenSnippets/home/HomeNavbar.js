import React, {useContext} from 'react';
import dSelectorLogo from '../../assets/icons/navbar/dselector-logo.png';
import LanguageSwitcher from '../../components/buttons/LanguageSwitcher';
import MainButton from '../../components/buttons/MainButton';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import ThemeSwitcher from '../../components/buttons/ThemeSwitcher';
import {themeStyles} from '../../styles/theme/ThemeStyle';

const HomeNavbar = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="home_navbar_div">
        <nav class="navbar navbar-expand-lg" style={styles.navbar}>
          <a class="navbar-brand mt-2 mt-lg-0 d-flex" href="">
            <img src={dSelectorLogo} style={{width:'220px', height:'120px'}} className="" alt="dselector" />

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
                <li class="nav-item active">
                  <a class="nav-link" href="">{t(`home.navbar.contact_us`)}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">{t(`home.navbar.ddns_services`)}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">{t(`home.navbar.support`)}</a>
                </li>
                <li class="nav-item">
                  <LanguageSwitcher />
                </li>
                <li class="nav-item">
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
            <div class="d-flex align-items-center">
              <MainButton title={t(`home.navbar.signup`)} width="100px" height="40px"/>
            </div>
          </div>
        </nav>
      </div>
    );
}
  
export default HomeNavbar;
  