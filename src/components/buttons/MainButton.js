import React from 'react';
import { useTranslation } from 'react-i18next';

const MainButton = (props) => {

    const { t } = useTranslation();

    return (
        <div className="button_div my-2">
            <button>{props.title}</button>
        </div >
    );
}
  
export default MainButton;
  