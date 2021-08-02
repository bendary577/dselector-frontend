import React from 'react';
import { useTranslation } from 'react-i18next';
import MainButton from '../../components/buttons/MainButton';
import TextInput from '../../components/inputs/TextInput';

const GuestRegisterHostname = () => {

    const { t } = useTranslation();

    return (
            <div className="guest_register_hostname my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                            <TextInput placeholder="hostname" id="" name="" value=""/>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                            <TextInput placeholder="hostname" id="" name="" value=""/>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                            <MainButton title="get started" />
                        </div>
                    </div>
                </div>
            </div >
    );
}
  
export default GuestRegisterHostname;
  