import React, {useContext} from 'react';
import { themeStyles } from '../../styles/theme/ThemeStyle';
import { ThemeContext } from '../../context/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import facebookicon from '../../assets/icons/footer/facebook.png';
import instagramIcon from '../../assets/icons/footer/instagram.png';
import twitterIcon from '../../assets/icons/footer/twitter.png';
import phoneIcon from '../../assets/icons/footer/phone.png';
import locationIcon from '../../assets/icons/footer/location.png';
import erpIcon from '../../assets/icons/footer/erp.png';
import blogIcon from '../../assets/icons/footer/blog.png';
import physiAppsIcon from '../../assets/icons/footer/physiapps.png';
import cselectionIcon from '../../assets/icons/footer/cselection.png';

const Footer = (props) => {

    const { mode } = useContext(ThemeContext);
    const styles = themeStyles(mode);
    const { t } = useTranslation();

    return (
        <div className="footer_div" style={styles.home.footer}>
            <div className="container w-100 h-100">
                <div className="row w-100 h-100">
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-white">
                        <div>
                            <div className="title mt-4">
                                <h3>{t(`home.footer.cselection_corp`)}</h3>
                            </div>
                            <div className="content">
                                <div className="d-flex">
                                    <img src={phoneIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">01120738475</p>
                                </div>
                                <div className="d-flex">
                                    <img src={locationIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.address`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-white">
                        <div>
                            <div className="title mt-5">
                                <h3>{t(`home.footer.follow_us`)}</h3>
                            </div>
                            <div className="content">
                                <div className="d-flex">
                                    <img src={facebookicon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.facebook`)}</p>
                                </div>
                                <div className="d-flex">
                                    <img src={twitterIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.twitter`)}</p>
                                </div>
                                <div className="d-flex">
                                    <img src={instagramIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.instagram`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-white">
                        <div>
                            <div className="title">
                                <h3>{t(`home.footer.our_products`)}</h3>
                            </div>
                            <div className="content">
                                <div className="d-flex">
                                    <img src={erpIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.erpnext`)}</p>
                                </div>
                                <div className="d-flex">
                                    <img src={physiAppsIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.physiapps`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center text-white">
                        <div>
                            <div className="title">
                                <h3>{t(`home.footer.take_look`)}</h3>
                            </div>
                            <div className="content">
                                <div className="d-flex">
                                    <img src={cselectionIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">cselection.com</p>
                                </div>
                                <div className="d-flex">
                                    <img src={blogIcon} style={{width:'25px', height:'25px'}} alt="" />
                                    <p className="me-2 text-white">{t(`home.footer.blog`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
  
export default Footer;
  