import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../context/theme/ThemeProvider';
import {themeStyles} from '../../../styles/theme/ThemeStyle';
import FirewallTopNavbar from '../../../screenSnippets/account/firewall/FirewallTopNavbar';
import sourceIcon from '../../../assets/icons/firewall/source.png';
import addFirewallIcon from '../../../assets/icons/firewall/add_firewall.png';
import MinorFooter from '../../../screenSnippets/account/account/MinorFooter';
import FirewallSettingsSideMenu from '../../../screenSnippets/account/firewall/FirewallSettingsSideMenu';
import AccountNavbar from '../../../screenSnippets/account/account/AccountNavbar';
import FirewallSourceCard from '../../../components/cards/FirewallSourceCard';

const FirewallSources = () => {

  const { t } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const styles = themeStyles(mode); 


    return (
        <div className="account_dashboard_div">
            <AccountNavbar />
            <div className="d-flex">
                <FirewallSettingsSideMenu />
                <div className="account_dashbaord_content_div w-100" style={styles.dashboard.create_new_host}>
                    <FirewallTopNavbar />
                    {/* ----------------------------------- hostnames cards ------------------------ */}
                    <div className="create_host_title mx-4 d-flex justify-content-between">
                        <div className="d-flex mx-4">
                            <img src={sourceIcon} style={{width:'70px', height:'70px'}} alt="" />
                            <h2 className="me-2 mt-3"><strong>Firewall Sources</strong></h2>
                        </div>

                        <div className="mx-4">
                            <button type="button" class="btn me-2 mt-3" style={styles.buttons.secondary_button} data-toggle="modal" data-target="#add_source_modal">
                                <strong>add source</strong>
                            </button>
                        </div>
                    </div>

                    <div class="modal fade" id="add_source_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <div className="d-flex">
                                    <img src={addFirewallIcon} style={{width:'30px', height:'30px'}} alt="" />
                                    <h5 className="modal-title mx-2" id="exampleModalLabel">Add New Firewall Source</h5>
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <p>Ensure DSelector is sending syslog messages to the DSelector Reporter for FortiGate Server. Then add the FortiGate as a source below.</p>
                            <form>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Host or IP" /> 
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Syslog Port" />
                                    </div>
                                </div>
                            </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn" style={styles.buttons.secondary_button}>add source</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <FirewallSourceCard />

                </div>
            </div>  
            <MinorFooter />
        </div>
    );
}
  
export default FirewallSources;
  