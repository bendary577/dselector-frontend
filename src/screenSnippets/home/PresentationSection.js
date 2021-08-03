import React, {useContext} from 'react';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import '../../assets/css/home/presentation.css';
import deviceIcon from '../../assets/images/home/presentation/device.png';

const PresentationSection = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="presentation_section_div">
                <div className="container">
                    <div className="row presentation">
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <h3>{t(`home.presentation.presentation_text`)}</h3>    
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src={deviceIcon} style={{width:'500px', height:'500px'}} alt="device" />                       
                        </div>
                    </div>
                </div>
        </div >
    );
}
  
export default PresentationSection;
  