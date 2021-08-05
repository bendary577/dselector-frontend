import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import robotLightIcon from '../../assets/icons/welcome/robot-light.png';
import robotDarkIcon from '../../assets/icons/welcome/robot-dark.png';

const WelcomeCard = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="welcome_card_div mb-3">
          <div className="card">
              <div className="card-body">
                  <div className="container">
                      <div className="row">
                            <div className="col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
                                <img src={mode === 'dark' ? robotDarkIcon : robotLightIcon} style={{width : '70px', height : '70px'}} alt="" />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <h3><strong>192.168.1.180</strong></h3>
                                <p>are automatically styled to match with</p>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
  
export default WelcomeCard;
  