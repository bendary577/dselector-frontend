import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/css/inputs/text_input.css';


const TextInput = (props) => {

    const { t } = useTranslation();

    return (
        <div className="text_input_div my-2">
            <input type="text" className="text_input" placeholder={props.placeholder}/>
        </div>
    );
}
  
export default TextInput;
  