import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import {themeStyles} from '../../styles/theme/ThemeStyle';
import AccountTopNavbar from '../../screenSnippets/account/AccountTopNavbar';
import TextInput from '../../components/inputs/TextInput';
import newHostIcon from '../../assets/icons/account/new-host.png';
import MainButton from '../../components/buttons/MainButton';

const CreateNewHost = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
      <div className="account_dashbaord_content_div w-100">
            <AccountTopNavbar />
            {/* ----------------------------------- hostnames cards ------------------------ */}
            <div className="create_host_title mx-4">
                <div className="d-flex mx-4">
                    <img src={newHostIcon} style={{width:'70px', height:'70px'}} alt="" />
                    <h2 className="me-2 mt-3"><strong>create new host </strong></h2>
                </div>
            </div>

            <div className="create_host_form my-3">
                <div className="container">
                    <div className="row mx-4">
                        <div className="col-md-8 col-sm-12">
                            <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                        </div>
                    </div>
                    <div className="row mx-4">
                        <div className="col-sm-12">
                            <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                        </div>
                    </div>
                    <div className="row mx-4 my-3">
                        <div className="col-sm-12">
                            <h3><strong>type</strong></h3>
                            <div className="my-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <h4>DNS Host</h4>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <h4>IPv6</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-4 my-3">
                        <MainButton title={t(`home.welcome.get_started`)} width="100%" height="50px"/>
                    </div>
                </div>
            </div>

      </div>
    );
}
  
export default CreateNewHost;
  