import React, {useContext} from 'react';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import securityIcon from '../../assets/icons/scrolling_row/security.png';
import availabilityIcon from '../../assets/icons/scrolling_row/availability.png';
import consistencyIcon from '../../assets/icons/scrolling_row/integrity.png';
import reliabilityIcon from '../../assets/icons/scrolling_row/reliability.png';

const ScrollingRowSection = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="scrolling_row_section_div" style={styles.home.scrolling_row}>
            <div className="container w-100 h-100">
                <div className="row w-100 h-100">
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-center">
                        <div>
                            <div className="icon">
                                <img src={consistencyIcon} style={{width:'35px', height:'35px'}} alt="" />
                            </div>
                            <div className="text">
                                <h4>{t(`home.scrolling_row.data_consistency`)}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-center">
                        <div>
                            <div className="icon">
                                <img src={reliabilityIcon} style={{width:'35px', height:'35px'}} alt="" />
                            </div>
                            <div className="text">
                                <h4>{t(`home.scrolling_row.high_reliability`)}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-center">
                        <div>
                            <div className="icon">
                                <img src={securityIcon} style={{width:'35px', height:'35px'}} alt="" />
                            </div>
                            <div className="text">
                                <h4>{t(`home.scrolling_row.privacy_security`)}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-center">
                        <div>
                            <div className="icon">
                                <img src={availabilityIcon} style={{width:'35px', height:'35px'}} alt="" />
                            </div>
                            <div className="text">
                                <h4>{t(`home.scrolling_row.availability`)}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
  
export default ScrollingRowSection;
  