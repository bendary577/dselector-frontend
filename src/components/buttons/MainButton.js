import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/css/buttons/main_button.css';

const MainButton = (props) => {

    const { t } = useTranslation();

    return (
        <div className="button_div my-2">
            <button className="main_button">{props.title}</button>
        </div >
    );
}
  
export default MainButton;
  