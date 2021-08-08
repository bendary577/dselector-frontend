import React from 'react';
import { useTranslation } from 'react-i18next';
import MainButton from '../../components/buttons/MainButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import TextInput from '../../components/inputs/TextInput';
import '../../assets/css/home/guest_register_hostname.css';
import { useHistory } from "react-router-dom";

const GuestRegisterHostname = () => {

    const { t } = useTranslation();
    const history = useHistory();

    const navigateToSignup = () => {
        history.push("/signup") 
    }
    return (
            <div className="guest_register_hostname_div mx-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <TextInput placeholder={t(`home.welcome.hostname`)} width="100%" id="" name="" value=""/>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <TextInput placeholder={t(`home.welcome.domain`)} width="100%" id="" name="" value=""/>
                        </div>
                        <div className="col-sm-12 col-md-2">
                            <SecondaryButton title={t(`home.welcome.get_started`)} method={navigateToSignup} width="100%" height="50px"/>
                        </div>
                    </div>
                </div>
            </div >
    );
}
  
export default GuestRegisterHostname;
  