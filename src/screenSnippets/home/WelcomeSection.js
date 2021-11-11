import React,{useContext} from 'react';
import '../../assets/css/home/welcome.css';
import welcomeImg from '../../assets/svg/home/welcome/welcome2.svg';
import { useTranslation } from 'react-i18next';
import shiningIcon from '../../assets/icons/welcome/shining.png';
import sunIcon from '../../assets/icons/welcome/sun.png';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import WelcomeCard from '../../components/cards/WelcomeCard';

const WelcomeSection = () => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
            <div className="welcome_section" style={styles.home.welcome}>
                <div className="container">
                    <div className="row welcome">
                        {/* ----------------------------------------- left section -------------------------- */}
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-center align-items-center">
                                        <div className="welcome_icon">
                                            <img src={ mode === 'dark' ? shiningIcon : sunIcon} style={{width:'50px'}} alt="" /> 
                                        </div>
                                        <div className="welcome_text">
                                            <h1><strong>{t(`home.welcome.welcome_text`)}</strong></h1>
                                            <h1 style={{color : '#005ae0'}}><strong>Visit our hosting store now</strong></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------------- right section---------------------------- */}
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src={welcomeImg} style={{width:'600px', height:'600px', ...styles.home.welcome.image}} alt="welcome" className="" />
                        </div>
                    </div>
                </div>
            </div >
    );
}
  
export default WelcomeSection;
  