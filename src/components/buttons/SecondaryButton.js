import React, {useContext} from 'react';
import '../../assets/css/buttons/main_button.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import  { Redirect } from 'react-router-dom';

const SecondaryButton = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);

    const navigateToSignup = () => {
        console.log("$$$$$$$$$$$$ hamada")
        return <Redirect to='/signup'  />
    }
    
    return (
        <div className="button_div my-2">
            <button className="main_button" onClick={()=> navigateToSignup } style={{width : props.width, height : props.height, ...styles.buttons.secondary_button}}>{props.title}</button>
        </div >
    );
}
  
export default SecondaryButton;
  