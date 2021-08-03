import React from 'react';
import '../../assets/css/inputs/text_input.css';


const TextInput = (props) => {
    return (
        <div className="text_input_div my-2">
            <input type="text" className="text_input" placeholder={props.placeholder} style={{width:props.width}}/>
        </div>
    );
}
  
export default TextInput;
  