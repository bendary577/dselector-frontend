import React from 'react';
import { useTranslation } from 'react-i18next';
import MainButton from '../../components/buttons/MainButton';
import TextInput from '../../components/inputs/TextInput';
import '../../assets/css/home/guest_register_hostname.css';

const GuestRegisterHostname = () => {

    const { t } = useTranslation();

    return (
            <div className="guest_register_hostname_div">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                            <TextInput placeholder={t(`home.welcome.hostname`)} width="400px" id="" name="" value=""/>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                            <TextInput placeholder={t(`home.welcome.domain`)} width="200px" id="" name="" value=""/>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                            <MainButton title={t(`home.welcome.get_started`)} width="200px" height="50px"/>
                        </div>
                    </div>
                </div>
            </div >
    );
}
  
export default GuestRegisterHostname;
  