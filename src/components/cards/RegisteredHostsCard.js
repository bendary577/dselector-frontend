import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import '../../assets/css/account/account_side_menu.css';
import hostNameIcon from '../../assets/icons/account/hostname.png';
import MainButton from '../buttons/MainButton';


const RegisteredHostsCard = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 

    return (
      <div className="registered_hosts_card_div mb-3">
          <div className="card">
              <div className="card-body">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                            <img src={hostNameIcon} style={{width:'100px', height:'100px'}} alt="" />
                          </div>
                          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                                <div className="container">
                                    <div className="row">
                                        <h4>1 hostname from 3</h4>
                                    </div>
                                    <div className="row">
                                        <MainButton title="create new one" width="120px" height="50px" />
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
  
export default RegisteredHostsCard;
  