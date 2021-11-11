import React, {useContext} from 'react';
import '../../assets/css/buttons/main_button.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import '../../assets/css/home/about.css';
import device1Icon from '../../assets/icons/about/device-1.png';
import device2Icon from '../../assets/icons/about/device-2.png';
import moonIcon from '../../assets/icons/about/moon.png';
import sunIcon from '../../assets/icons/about/sun.png';

const AboutSection = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="about_section_div" style={styles.home.about.section}>
                <div className="container">
                    <div className="row about">
                        <div className="mt-5 text-center">
                            <div className="text-center d-flex justify-content-center align-items-center">
                                <h2 style={{color : '#005ae0'}}><strong>{t(`home.about.title`)}</strong></h2>
                                <img src={mode === 'dark' ? moonIcon : sunIcon} style={{width : '50px', height : '50px'}} className="me-2" alt="" />
                            </div>
                            <h4>{t(`home.about.description`)}</h4>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div class="card" style={styles.home.about.card}>
                                <div class="card-body text-center border border-light">
                                    <img src={device1Icon} style={{width:'100px', height:'100px'}} alt="" />
                                    <h3 className="card-title mt-2"><strong>{t(`home.about.local_network`)}</strong></h3>
                                    <p class="card-text">{t(`home.about.local_network_description`)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div class="card" style={styles.home.about.card}>
                                <div class="card-body text-center border border-light">
                                    <img src={device2Icon} style={{width:'100px', height:'100px'}} alt="" />
                                    <h3 className="card-title mt-2"><strong>{t(`home.about.local_network`)}</strong></h3>
                                    <p class="card-text">{t(`home.about.local_network_description`)}</p>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
        </div >
    );
}
  
export default AboutSection;
  