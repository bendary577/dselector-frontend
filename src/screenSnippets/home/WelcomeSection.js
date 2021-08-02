import React from 'react';
import '../../assets/css/home/welcome.css';
import welcomeImg from '../../assets/images/home/welcome/welcome.png';
import { useTranslation } from 'react-i18next';

const WelcomeSection = () => {

    const { t } = useTranslation();

    return (
            <div className="welcome_section">
                <div className="container">
                    <div className="row welcome">
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <h1><strong>{t(`home.welcome.welcome_text`)}</strong></h1>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src={welcomeImg} style={{width:'550px', height:'550px'}} alt="welcome" className="" />
                        </div>
                    </div>
                </div>
            </div >
    );
}
  
export default WelcomeSection;
  