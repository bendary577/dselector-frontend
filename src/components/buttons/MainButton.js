import React, {useContext} from 'react';
import '../../assets/css/buttons/main_button.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';

const MainButton = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    
    return (
        <div className="button_div">
            <button className="main_button" onClick={props.method} style={{width : props.width, height : props.height, ...styles.buttons.main_button}}>{props.title}</button>
        </div >
    );
}
  
export default MainButton;
  