import React, {useContext} from 'react';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import camera from '../../assets/icons/services/camera.png';
import pc from '../../assets/icons/services/pc.png';
import router from '../../assets/icons/services/router.png';


const Services = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="services_section_div" style={{height:'600px'}}>
            <div className="container">
                <div className="row">
                    <dv className="col-md-6 col-sm-12 p-5 d-flex justify-content-center align-items-center">
                        <img src={camera} style={{width:'150px', height:'150px'}} alt="camera" />
                    </dv>
                    <dv className="col-md-6 col-sm-12 p5 d-flex justify-content-center align-items-center">
                        <h3>{t(`home.services.camera`)}</h3>
                    </dv>
                </div>
                <div className="row">
                    <dv className="col-md-6 col-sm-12 p5 d-flex justify-content-center align-items-center">
                        <h3>{t(`home.services.pc`)}</h3>
                    </dv>
                    <dv className="col-md-6 col-sm-12 p5 d-flex justify-content-center align-items-center">
                        <img src={pc} style={{width:'150px', height:'150px'}} alt="pc" />    
                    </dv>
                </div>
                <div className="row">
                    <dv className="col-md-6 col-sm-12 p5 d-flex justify-content-center align-items-center">
                        <img src={router} style={{width:'150px', height:'150px'}} alt="router" />
                    </dv>
                    <dv className="col-md-6 col-sm-12 p5 d-flex justify-content-center align-items-center">
                        <h3>{t(`home.services.router`)}</h3>    
                    </dv>
                </div>
            </div>
        </div >
    );
}
  
export default Services;
  