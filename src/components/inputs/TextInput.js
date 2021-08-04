import React, {useContext} from 'react';
import '../../assets/css/inputs/text_input.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';

const TextInput = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);

    return (
        <div className="text_input_div my-2">
            <input type="text" className="text_input" placeholder={props.placeholder} style={{width:props.width, ...styles.inputs.text_input}}/>
        </div>
    );
}
  
export default TextInput;
  