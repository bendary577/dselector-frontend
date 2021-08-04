import React, {useContext} from 'react';
import '../../assets/css/buttons/main_button.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import '../../assets/css/home/about.css';
import device1Icon from '../../assets/icons/about/device-1.png';
import device2Icon from '../../assets/icons/about/device-2.png';

const AboutSection = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="about_section_div" style={styles.home.about.section}>
                <div className="container">
                    <div className="row about">
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div class="card" style={styles.home.about.card}>
                                <div class="card-body text-center">
                                    <img src={device1Icon} style={{width:'100px', height:'100px'}} alt="" />
                                    <h3 className="card-title mt-2"><strong>{t(`home.about.local_network`)}</strong></h3>
                                    <p class="card-text">{t(`home.about.local_network_description`)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div class="card" style={styles.home.about.card}>
                                <div class="card-body text-center">
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
  