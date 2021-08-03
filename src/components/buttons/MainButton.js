import React, {useContext} from 'react';
import '../../assets/css/buttons/main_button.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';

const MainButton = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);

    return (
        <div className="button_div my-2">
            <button className="main_button" style={{width : props.width, height : props.height, ...styles.main_button}}>{props.title}</button>
        </div >
    );
}
  
export default MainButton;
  