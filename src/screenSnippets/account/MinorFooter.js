import React, {useContext} from 'react';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';

const MinorFooter = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="minor_footer_div" style={{height:'50px', backgroundColor:'black'}}>
            <div className="text-center d-flex justify-content-center align-items-center">
                <h5 className="text-white"><strong>© clearip.com • All Rights Reserved</strong></h5>
            </div>
        </div >
    );
}
  
export default MinorFooter;
  