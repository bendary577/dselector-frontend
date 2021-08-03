import React, {useContext} from 'react';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';

const ScrollingRowSection = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="scrolling_row_section_div" style={{height:'100px', backgroundColor:'#E5F7FF'}}>

        </div >
    );
}
  
export default ScrollingRowSection;
  