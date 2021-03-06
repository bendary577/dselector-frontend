import React, {useContext} from 'react';
import '../../assets/css/inputs/text_input.css';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import '../../assets/css/inputs/searchbar.css';

const SearchBar = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);

    return (
        <div className="text_input_div my-2">
            <input id="icon" type="text" className="text_input border" placeholder={props.placeholder} style={{width:props.width, textIndent : '17px' , ...styles.inputs.text_input}}/>
        </div>
    );
}
  
export default SearchBar;
  